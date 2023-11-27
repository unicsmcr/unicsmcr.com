import moment from 'moment';

export class UpcomingEvent {
    title: string;
    description: string;
    image: string;
    date: moment.Moment;
    time: moment.Moment;
    location: string;
    type: string[];
    link: string;

    constructor(title: string, description: string, image: string, date: moment.Moment, time: moment.Moment, location: string, type: string[], link: string){
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