export async function initModule(scope: string, module: string) {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    // @ts-ignore
    await __webpack_init_sharing__('default');
    // @ts-ignore
    const container = window[scope];
    // eslint-disable-next-line no-undef
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    // @ts-ignore
    const factory = await window[scope].get(module);

    return factory().default;
}

export function addDynamicScript(config: any) {
    return new Promise((resolve, reject) => {
        const element = document.createElement('script');

        element.src = config.url;
        element.type = 'text/javascript';
        element.async = true;

        element.onload = () => {
            console.log(`Dynamic Script Loaded: ${config.url}`);
            resolve(element);
        };

        element.onerror = () => {
            console.error(`Dynamic Script Error: ${config.url}`);
            reject();
        };

        document.head.appendChild(element);

        return element;
    });
}
