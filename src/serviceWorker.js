// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||// [::1] is the IPv6 localhost address.window.location.hostname == '[::1]; || 
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);
export default function register(config) {
    if(process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator){
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if(publicUrl.origin !== window.location.origin) {
            return;
        }
    window.addEventListener('load', () => {
        const serviceUrl = `${process.env.PUBLIC_URL}/serviceworker.js`;

        if (isLocalhost){
            checkValidServiceWorker(serviceUrl, config);
            navigator.serviceWorker.ready.then(() =>
            {
                console.log('This web app is being served cache-first by a service worker');
            });
        } else {
            registerValidSW(serviceUrl, config);
        }
    });
    }
}
function registerValidSW(serviceUrl, config) {
    navigator.serviceWorker.register(serviceUrl).then(registration => {
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if(installingWorker == null){
                return;
            }
            installingWorker.onstatechange = () => {
                if(installingWorker.state === 'installed'){
                    if(navigator.serviceWorker.controller){
                        console.log("New content is available and will ne used when all '+ 'tabs are closed");
                        if(config && config.onUpdate){
                            config.onUpdate(registration);
                        }
                    } else{
                        console.log("Content is cached for app usage offline");
                        if(config && config.onSuccess){
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    }).catch(error => {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(serviceUrl, config) {
    fetch(serviceUrl, {
        headers:{'Service-Worker': 'script'},
    }).then(response => {
        const contentType = response.headers.get('content-type');
        if(
            response.status === 404 ||(contentType != null && contentType.indexOf('javascript') === -1)
        ){
            navigator.serviceWorker.ready.then(registration => {
                registration.unregister().then(() => {
                    window.location.reload();
                });
            });
        } else {
            registerValidSW(serviceUrl, config);
        }
    }).catch(() => {
        console.log("No internet connection has been discovered. App is currently running offline");
    });
}
export function unregister() {
    if('serviceWorker' in navigator){
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        }).catch(error => {
            console.error(error.message);
        });
    }
}