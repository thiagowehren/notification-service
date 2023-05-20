import { Content } from "./content";

describe('Notification content', () => {
    test('it should be able to create a notification content', () => {
        const content = new Content('Título do conteúdo.');
        expect(content).toBeTruthy();
    });
    
    test('it should not be able to create a notification content with less than 1 character', () => {
        expect(() => new Content('')).toThrow();
    });
    
    test('it should not be able to create a notification content with more than 255 character', () => {
        expect(() => new Content('t'.repeat(256))).toThrow();
    });
});