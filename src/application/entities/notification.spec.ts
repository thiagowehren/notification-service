import { Content } from "./content";
import { Notification } from "./notifications";

describe('Notification', () => {
    test('it should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('content'),
            category: 'category',
            recipientId: 'recipientId'
        });

        expect(notification).toBeTruthy();
    });
});