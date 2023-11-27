export class UpcomingEvent {
    title: string;
    description: string;
    image: string;
    date: Date;
    time: Date;
    location: string;
    type: string[];
    link: string;

    constructor(title: string, description: string, image: string, date: Date, time: Date, location: string, type: string[], link: string){
        this.title = title;
        this.description = description;
        this.image = image;
        this.date = date;
        this.time = time;
        this.location = location;
        this.type = type;
        this.link = link;
    }
}