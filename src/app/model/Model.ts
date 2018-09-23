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
