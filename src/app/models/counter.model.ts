import { ElapsedTime } from '../counter/elapsed-time.model';

export class Counter {

    // private elapsedTime: ElapsedTime = new ElapsedTime(0, 0, 0, 0, 0, 0);

    public id: number;
    public name: string;
    public description: string;
    public date: number;
    public imageUrl: string;
    public imageThumbnailUrl = '';

    constructor(id: number, name: string, description: string, date: number, imageUrl: string, imageThumbnailUrl: string) {
        if (id) {
            this.id = id;
        } else {
            this.id = Date.now();
        }
        this.name = name;
        this.description = description;
        this.date = date;
        this.imageUrl = imageUrl;
        this.imageThumbnailUrl = imageThumbnailUrl;

        // this.elapsedTime = this.getElapsedTime();
    }

    public static getElapsedTime(c: Counter): ElapsedTime  {

        const ret: ElapsedTime = new ElapsedTime(0, 0, 0, 0, 0, 0);
        const diff = Math.abs(new Date().getTime() - new Date(c.date).getTime());

        ret.weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        ret.days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 7;
        ret.hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        ret.minutes = Math.floor(diff / (1000 * 60)) % 60;
        ret.seconds = Math.floor(diff / (1000)) % 60;

        // console.log('getElapsedTime', ret);

        return ret;
    }
}
