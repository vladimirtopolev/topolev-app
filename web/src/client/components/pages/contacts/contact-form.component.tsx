import * as React from 'react';
import {useForm, useField, FieldRenderProps} from 'react-final-form-hooks'


export default () => {
    const onSubmit = (val:any) => {
        console.log(val);
    };

    const {form, handleSubmit, pristine, submitting} = useForm({
        onSubmit
    });

    const firstName = useField('firstName', form);
    const lastName = useField('lastName', form);
    const company = useField('company', form);
    const phone = useField('phone', form);
    const email = useField('email', form);
    const message = useField('message', form);

    const renderInputIssue = (input: FieldRenderProps) => {
        return input.meta.touched && input.meta.error
            && <span>{input.meta.error}</span>;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-6">
                    <input {...firstName.input} className="form-control" placeholder="Имя"/>
                    {renderInputIssue(firstName)}
                </div>
                <div className="form-group col-md-6">
                    <input {...lastName.input} className="form-control" placeholder="Фамилия"/>
                    {renderInputIssue(lastName)}
                </div>
            </div>
            <div className="form-group">
                <input {...company.input} className="form-control" placeholder="Компания"/>
                {renderInputIssue(company)}
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <input {...phone.input} className="form-control" placeholder="Телефон"/>
                    {renderInputIssue(phone)}
                </div>
                <div className="form-group col-md-6">
                    <input {...email.input} className="form-control" placeholder="Email"/>
                    {renderInputIssue(email)}
                </div>
            </div>
            <div className="form-group">
                <textarea {...message.input} className="form-control" placeholder="Текст сообщения" rows={4}/>
                {renderInputIssue(message)}
            </div>
            <button type="submit" disabled={pristine || submitting} className="btn btn-primary mb-2">Отправить</button>
        </form>
    );
}
