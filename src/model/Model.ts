import { EventEmitter } from "events";
import { appVersion } from './AppVersion';

const uuidv4 = require('uuid/v4');
const now = require("performance-now");

export default class Model extends EventEmitter {

    public statusMessages: string;
    public panelZIndexMap: Map<string, number>;
    public esmlExamples: any[];

    constructor() {
        super();
        this.panelZIndexMap = new Map<string, number>();
        this.statusMessages = '';

        this.esmlExamples = [
                { label: "hello world", value: "hello world!" },
                { label: "happy", value: "This is a happy sound <ssa cat='happy'/>" },
                { label: "three-happy", value: "Here are three happy sounds <ssa cat='happy' loop='3'/>" },
                { label: "worried", value: "<ssa cat='worried'/> That was my worried noise" },
                { label: "penguins", value: "<ssa cat='affection' nonBlocking='true'/> I love penguins" },
                { label: "trust-moose", value: "Not sure <break size='0.5'/> if trust moose" },
                { label: "break", value: "I won’t talk for 2 seconds. <break size='2'/> See?" },
                { label: "bono-moose1", value: "Does <phoneme ph='b aa n ou'> Bono </phoneme> love moose, too?" },
                { label: "bono-moose2", value: "Does <phoneme ph='b aa1 n ou0'> Bono </phoneme> love moose, too?" },
                { label: "hi-pitched", value: "<pitch add='200'> Hi </pitch> <pitch mult='1.2'> there </pitch> <break size='1'/> I'm Jibo" },
                { label: "pitch", value: "This is a <pitch mult='2.2'> pitch </pitch> test" },
                { label: "duration", value: "This is a <duration stretch='3'> duration </duration> test" },
                { label: "duration-pitch", value: "<duration stretch='3.0'> <pitch halftone='-5'> This is a duration and pitch test </pitch></duration>" },
                { label: "hi", value: "<pitch band='1.2'> Hi there, I'm Jibo </pitch>" },
                { label: "spell-jibo", value: "*Jibo is spelled <say-as spell='jibo'/>" },
                { label: "flower", value: "<anim cat='emoji' filter='flower'> This is a flower </anim>" },
                { label: "dance", value: "<anim cat='dance' filter='music, rom-upbeat'/>." },
                { label: "ssa", value: "This is a happy sound <ssa cat='happy'/>" },
                { label: "flower", value: "<anim cat='emoji' filter='flower'> This is a flower </anim>" },
                { label: "turtle", value: "<anim cat='emoji' filter='?flower, ?turtle'> This is either a flower or a turtle </anim>" },
                { label: "not flower", value: "<anim cat='emoji' filter='!flower'/> This is not a flower" },
                { label: "emoji", value: "<anim cat='emoji' filter='flower, !blue, !white'/> This is flower that isn't blue or white" },
                { label: "twerk", value: "<anim cat='dance' filter='rom-twerk'/> I'm a twerking robot" },
                { label: "emoji", value: "<anim cat='emoji' filter='?(flower, turtle)'> This is either a flower or a turtle </anim>" },
                { label: "emoji", value: "<anim cat='emoji' filter='&(flower), !(blue, white)'/> This is flower that isn't blue" },
                { label: "emoji", value: "<anim cat='emoji' filter='&(hf, flower)'/> This is a flower hotframe" },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(flower)'/> This is my full flower emoji" },
                { label: "dance", value: "<anim cat='dance' filter='&(music)'/> I'm dancing to music" },
                { label: "dance", value: "<anim cat='dance' filter='!(music)'/> I'm dancing without music" },
                { label: "dance", value: "I can dance <anim cat=‘dance’ filter=‘music’/> There it was" },
                { label: "dance", value: "<anim cat=‘dance’ filter=‘music’> I’m dancing right now </anim>" },
                { label: "dance", value: "<anim cat=‘dance’ filter=‘music’ nonBlocking='true'/> I’m dancing right now" },
                { label: "dance", value: "<anim cat=‘dance’ filter=‘music’ loop='0'> Look at me, I’m dancing right now, for an extended period of time </anim>" },
                { label: "dance", value: "<anim cat=‘dance’ filter=‘music’ loop='3'/> I just danced 3 times" },
                { label: "dance", value: "<anim cat=‘dance’ filter=‘music’ loop='3' nonBlocking='true'/> I’m dancing right now, 3 times" },
                { label: "dance", value: "<anim cat=‘dance’ filter=‘music’ endNeutral='true'/> I’m dancing right now" },
                { label: "dance", value: "<anim cat=‘dance’ filter=‘music’ endNeutral='true' nonBlocking='true'/> I’m dancing right now" },
                { label: "dance", value: "<anim cat=‘dance’ filter=‘music’ layers='!screen'/> I'm dancing with no screen animations" },
                { label: "dance", value: "<anim cat=‘dance’ filter=‘music’ layers='screen’/> I'm dancing with only screen animations" },
                { label: "dance", value: "<anim cat=‘dance’ filter=‘music’ layers='screen, body'/> I'm dancing with screen and body animations" },
                { label: "ssa", value: "This is a happy sound <ssa cat='happy'/>" },
                { label: "ssa", value: "Here are three happy sounds <ssa cat='happy' loop='3'/>" },
                { label: "ssa", value: "<ssa cat='worried'/> That was my worried noise." },
                { label: "ssa", value: "<ssa cat='affection' nonBlocking='true'/> I love penguins." },
                { label: "pitch", value: "<pitch add='200'> Hi </pitch><pitch mult='1.2'> there </pitch><break size='1'/> I'm Jibo" },
                { label: "pitch", value: "This is a <pitch mult='2.2'> pitch </pitch> test" },
                { label: "pitch", value: "<pitch band='1.2'> Hi there, I'm Jibo </pitch>" },
                { label: "pitch", value: "<pitch halftone='-5'> This is a pitch test </pitch>" },
                { label: "duration", value: "This is a <duration stretch='3'> duration </duration> test" },
                { label: "duration", value: "<duration stretch='3.0'> This is a duration test </duration>" },
                { label: "spell", value: "Jibo is spelled <say-as spell='jibo'/>" },
                { label: "phoneme", value: "Does <phoneme ph='b aa n ou'> Bono </phoneme> love moose, too?" },
                { label: "phoneme", value: "Does <phoneme ph='b aa1 n ou0'> Bono </phoneme> love moose, too?" },
                { label: "style", value: "<style set='enthusiastic'> This is great </style> But, <style set='confused'> how did they do that? </style>" },
                { label: "category", value: "<anim cat='affection' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='confused' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='dance' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='embarrassed' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='excited' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='frustrated' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='happy' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='laughing' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='no' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='proud' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='relieved ' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='sad' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='scared' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='surprised' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='worried' nonBlocking='true' endNeutral='true' />." },
                { label: "category", value: "<anim cat='yes' nonBlocking='true' endNeutral='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(airplane)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(basketball)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(beach)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(car)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(disco-spin)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(football)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(soccer)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(trophy)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(music)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(question-mark)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(star)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(beer)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(cake)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(cheese)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(drumstick)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(coffee)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(fork)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(fish)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(groceries)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(burger)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(hotdog)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(icecream)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(pizza)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(wine)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(christmas-tree)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(fireworks)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(halloween)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(hanukkah)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(thanksgiving)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(clover)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(valentines)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(chocolate)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(bicycle)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(cat)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(laptop)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(dog)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(gift)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(house)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(laundry)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(lightbulb)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(money)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(popcorn)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(party)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(phone)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(robot)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(sunglasses)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(toilet-paper)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(trash)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(umbrella)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(video-game)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(bird)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(cow)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(earth)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(flower)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(lightning-bolt)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(moon)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(mountain)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(mouse)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(penguin)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(pig)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(bunny)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(rainbow)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(baby)' nonBlocking='true' />." },
                { label: "emoji", value: "<anim cat='emoji' filter='!(hf), &(heart)' nonBlocking='true' />." },
                { label: "dance", value: "<anim cat='dance' filter='music, rom-upbeat'/>." },
                { label: "dance", value: "<anim cat='dance' filter='music, rom-ballroom'/>." },
                { label: "dance", value: "<anim cat='dance' filter='music, rom-silly'/>." },
                { label: "dance", value: "<anim cat='dance' filter='music, rom-slowdance'/>." },
                { label: "dance", value: "<anim cat='dance' filter='music, rom-eletronic'/>." },
                { label: "dance", value: "<anim cat='dance' filter='music, rom-twerk'/>." },
                { label: "dance", value: "<anim cat='dance' filter='!(music), &(rom-upbeat)' />." },
                { label: "dance", value: "<anim cat='dance' filter='!(music), &(rom-ballroom)' />." },
                { label: "dance", value: "<anim cat='dance' filter='!(music), &(rom-silly)' />." },
                { label: "dance", value: "<anim cat='dance' filter='!(music), &(rom-slowdance)' />." },
                { label: "dance", value: "<anim cat='dance' filter='!(music), &(rom-eletronic)' />." },
                { label: "dance", value: "<anim cat='dance' filter='!(music), &(rom-twerk)' />." },
                { label: "ssa", value: "This is a happy sound <ssa cat='happy'/>" },
                { label: "ssa", value: "Here are three happy sounds <ssa cat='happy' loop='3'/>" },
                { label: "ssa", value: "<ssa cat='worried'/> That was my worried noise" },
                { label: "ssa", value: "<ssa cat='affection' nonBlocking='true'/> I love penguins" },
                { label: "tts", value: "Not sure <break size='0.5'/> if trust moose" },
                { label: "tts", value: "I won’t talk for 2 seconds. <break size='2'/> See?" },
                { label: "tts", value: "Does <phoneme ph='b aa n ou'> Bono </phoneme> love moose, too?" },
                { label: "tts", value: "Does <phoneme ph='b aa1 n ou0'> Bono </phoneme> love moose, too?" },
                { label: "tts", value: "<pitch add='200'> Hi </pitch> <pitch mult='1.2'> there </pitch> <break size='1'/> I'm Jibo" },
                { label: "tts", value: "This is a <pitch mult='2.2'> pitch </pitch> test" },
                { label: "tts", value: "This is a <duration stretch='3'> duration </duration> test" },
                { label: "tts", value: "<duration stretch='3.0'> <pitch halftone='-5'> This is a duration and pitch test </pitch></duration>" },
                { label: "tts", value: "<pitch band='1.2'> Hi there, I'm Jibo </pitch>" },
                { label: "tts", value: "*Jibo is spelled <say-as spell='jibo'/>" },
        ];

        this.emit('ready', this);
    }

    get appVerison(): string {
        return appVersion;
    }

    updateAppStatusMessages(message: string, subsystem?: string, clearMessages: boolean = false): string {
        subsystem = subsystem || '';
        if (clearMessages) {
            this.statusMessages = '';
        }
        this.statusMessages = `${subsystem}: ${this.statusMessages}\n${message}`;
        this.onUpdate();
        return this.statusMessages;
    }

    onUpdate(): void {
        this.emit('updateModel');
    }

    dispose(): void {
    }
}
