/* eslint-disable */
Object.defineProperty(
    window,
    'MySweetApp',
    {
        value: 'v1.0.0',
        writable: true,
    },
);

function deliveryMethod() {
    // TODO
    return 'overnight';
}

function shipWeight() {
    const el = document.getElementById('weight');
    const weight = el
        ? el.innerHTML
        : '0';
    return parseInt(weight, 10);
}

/**
 * @param {(string | string[])} emailAddr - An email address of array of email addresses
 */
function sendUpdates(emailAddr: string | string[]): void {
    function sendEmail(addr: string) {
        // Default to standard delivery if empty
        console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`);

        if (shipWeight() > 100) {
            console.log('WARNING: Oversize package');
        }
    }

    // If it"s an array, loop over it
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val: string) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}

interface IAccount {
    firstName: string;
    age: number;
}

let persons: IAccount[];

persons = [
    {
        age: 32,
        firstName: "Igor",
    },
];
/* eslint-enable */
