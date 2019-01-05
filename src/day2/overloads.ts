function overrideTest(a: number, another: boolean): string;
function overrideTest(a: string): number;
function overrideTest(a: any): any {
    if (typeof a === 'number') {
        return '첫번째';
    }
    return '두번째';
}

// overrideTest(1);
overrideTest(2, false);
overrideTest('jieun');