import { useEffect, useState } from "react";
import { initModule, addDynamicScript } from "../../utils";

const RemoteModule = () => {
    const [Module, setModule] = useState(null);

    useEffect(() => {
        (async () => {
            await addDynamicScript({
                url: 'http://localhost:3002/remoteEntry.js'
            }).then(async res => {
                setModule(await initModule('remote', './Button'));
            })
        })()
    }, []);

    return Module;
}

export default RemoteModule;
