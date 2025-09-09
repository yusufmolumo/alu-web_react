export interface MajorCredits {
    _majorCreditsBrand: void;
    credits: number;
}

export interface MinorCredits {
    _minorCreditsBrand: void;
    credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits} as MajorCredits
}

export function MinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits
    } as MinorCredits
}