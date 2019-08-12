import * as React from 'react';
import cn from 'classnames';
import axios from 'axios';
import {Modal} from 'reactstrap';
import {useForm, useField, FieldRenderProps} from 'react-final-form-hooks';
import {useContext, useState} from 'react';
import {validatorsFactory} from '../../../../common/validators';
import {LanguageContext} from '../../../../common/helpers/with-language-context.render-props-component';
import * as formStyles from '../../../../common/styles/form.component.styles.css';
import * as styles from './contact-from.component.styles.css';

const InputField = ({className, field, placeholder}: { field: FieldRenderProps, placeholder: string, className?: string, }) => (
    <div className={cn(formStyles.FormGroup, className || '', {
        [formStyles.FormGroup_error]: field.meta.invalid && field.meta.touched
    })}>
        <input {...field.input} className={formStyles.FormControl} placeholder={placeholder}/>
        {field.meta.touched && field.meta.error
        && <span className={formStyles.FormErrorMessage}>{field.meta.error}</span>}
    </div>
);

export default ({callback, hideMessageField}: { callback?: () => void, hideMessageField?: boolean }) => {
    const languageContext = useContext(LanguageContext);
    const {dictionary} = languageContext;

    const [isOpen, changeModalState] = useState(false);

    const onToggleModal = () => {
        changeModalState(!isOpen);
        isOpen && callback && callback();
    };

    const onSubmit = (values: any) => {
        return axios.post('/api/clientMessages', values)
            .then(() => {
                onToggleModal();
            });
    };

    const {form, handleSubmit, pristine, submitting} = useForm({
        onSubmit,
        initialValues: hideMessageField?{message: 'Message without description'}: {}
    });

    const {emailFieldValidator, requiredFieldValidator, composeValidators} = validatorsFactory(languageContext.locale);
    const firstName = useField('firstName', form, requiredFieldValidator);
    const lastName = useField('lastName', form, requiredFieldValidator);
    const company = useField('company', form, requiredFieldValidator);
    const phone = useField('phone', form);
    const email = useField('email', form, composeValidators(requiredFieldValidator, emailFieldValidator));
    const message = useField('message', form, requiredFieldValidator);

    const renderInputIssue = (input: FieldRenderProps) => {
        return input.meta.touched && input.meta.error
            && <span className={formStyles.FormErrorMessage}>{input.meta.error}</span>;
    };


    return (
        <div>
            <form onSubmit={(event: any) => handleSubmit(event).then(form.reset)}>
                <div className="row">
                    <InputField field={firstName} className='col-md-6' placeholder={dictionary['firstName']}/>
                    <InputField field={lastName} className='col-md-6' placeholder={dictionary['lastName']}/>
                </div>
                <InputField field={company} placeholder={dictionary['company']}/>
                <div className="row">
                    <InputField field={phone} className='col-md-6' placeholder={dictionary['phone']} key={0}/>
                    <InputField field={email} className='col-md-6' placeholder={dictionary['email']} key={1}/>
                </div>
                {!hideMessageField && (
                    <div className="form-group">
                        <textarea {...message.input} className="form-control" placeholder={dictionary['message']} rows={4}/>
                        {renderInputIssue(message)}
                    </div>
                )}
                <button type="submit" disabled={pristine || submitting} className={formStyles.FormBtn}>
                    {dictionary['send']}
                </button>
            </form>
            <Modal isOpen={isOpen} toggle={onToggleModal}>
                <div className={styles.Modal}>
                    <button className={styles.Modal__closeBtn}
                            onClick={onToggleModal}>
                        <i className="fas fa-times"></i>
                    </button>
                    {dictionary['makeOrderMessageSuccess']}
                </div>
            </Modal>
        </div>
    );
}
