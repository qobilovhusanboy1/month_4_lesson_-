const counter = (text: string): void => {
    let kotta = 0;
    let kichkina = 0;
    
    for (let index: number = 0; index < text.length; index++) {
        if(text[index].charCodeAt(0) > 64 && text[index].charCodeAt(0) < 91) kotta++;
        else if(text[index].charCodeAt(0) > 96 && text[index].charCodeAt(0) < 123) kichkina++;
    };

    console.log(`Kottalar soni ${kotta}ta\nKichkinalar soni ${kichkina}`);
}

counter('This text test');