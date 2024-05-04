import { load } from '@cashfreepayments/cashfree-js';

export const initializeCashfree = async () => {
    const cashfree = await load({
        mode: "production" // or production
    });
    return cashfree;
};

