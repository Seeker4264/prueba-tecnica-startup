export interface Message {
    bot_sender:      number;
    business_id:     number;
    id:              number;
    message_date:    Date;
    message_text:    string;
    platform:        Platform;
    received_number: number;
    reply_to_id:     number | null;
    sender_name:     SenderName;
    sender_number:   number;
}

export enum Platform {
    Whatsapp = "whatsapp",
}

export enum SenderName {
    Bot = "bot",
    J = "j",
    Unknown = "unknown",
}