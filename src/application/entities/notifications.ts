import { randomUUID } from "crypto";
import { Replace } from "src/helpers/Replace";
import { Content } from "./content";

export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    createdAt: Date;
    readAt?: Date | null;
}

export class Notification {
    private _id: string;
    private props: NotificationProps;

    constructor(props: Replace<NotificationProps, { createdAt?: Date}>) {
        this._id = randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        };
    }
    
    /**
     * Getter _id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter recipientId
     * @return {string}
     */
	public get recipientId(): string {
		return this.props.recipientId;
	}

    /**
     * Setter recipientId
     * @param {string} value
     */
	public set recipientId(value: string) {
		this.props.recipientId = value;
	}

    /**
     * Getter content
     * @return {Content}
     */
	public get content(): Content {
		return this.props.content;
	}

    /**
     * Setter content
     * @param {Content} value
     */
	public set content(value: Content) {
		this.props.content = value;
	}

    /**
     * Getter category
     * @return {string}
     */
	public get category(): string {
		return this.props.category;
	}

    /**
     * Setter category
     * @param {string} value
     */
	public set category(value: string) {
		this.props.category = value;
	}

    /**
     * Getter createdAt
     * @return {Date}
     */
	public get createdAt(): Date {
		return this.props.createdAt;
	}
    
    // /**
    //  * Setter createdAt
    //  * @param {Date} value
    //  */
	// public set createdAt(value: Date) {
	// 	this.props.createdAt = value;
	// }

    /**
     * Getter readAt
     * @return { Date | undefined | null }
     */
	public get readAt(): Date | undefined | null {
		return this.props.readAt;
	}

    /**
     * Setter readAt
     * @param { Date | undefined | null } value
     */
	public set readAt(value: Date | undefined | null) {
		this.props.readAt = value;
	}
}




