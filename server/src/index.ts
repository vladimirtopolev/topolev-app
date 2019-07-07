import {open} from './dbConnection';
import {Server} from './server';

const PORT = process.env.PORT || 5000;

open()
    .then(() => {
        Server.bootstrap().getApp()
            .listen(PORT, () => console.log(`Listening on ${PORT}`))
    })
    .catch((e) => console.log(e));
