const pagesData = [
    {
        id: 'page1',
        title: 'Page 1',
        pageNumber: 1,
        imagePath: 'src/images/1.jpg',
        text: 'When I first met you, I didn\'t know what to do.  I even had no idea what to get you for a gift.',
        checkboxId: 'checkbox-page1'
    },
    {
        id: 'page2',
        title: 'Page 2',
        pageNumber: 2,
        imagePath: 'src/images/2.jpg',
        text: 'So I just bought polvoron from Goldilocks :P',
        checkboxId: 'checkbox-page2'
    },
    {
        id: 'page3',
        title: 'Page 3',
        pageNumber: 3,
        imagePath: 'src/images/3.jpg',
        text: 'As time passed by, it became a habit of me to visit you in your school whenever I\'m free after my classes.',
        checkboxId: 'checkbox-page3'
    },
    {
        id: 'page4',
        title: 'Page 4',
        pageNumber: 4,
        imagePath: 'src/images/4.jpg',
        text: 'We even developed a habit to stay after school hours for our quality time at school.',
        checkboxId: 'checkbox-page4'
    },
    {
        id: 'page5',
        title: 'Page 5',
        pageNumber: 5,
        imagePath: 'src/images/5.jpg',
        text: 'jae-jae time at school hehe <3',
        checkboxId: 'checkbox-page5'
    },
    {
        id: 'page6',
        title: 'Page 6',
        pageNumber: 6,
        imagePath: 'src/images/6.jpg',
        text: 'Waaah!',
        checkboxId: 'checkbox-page6'
    },
    {
        id: 'page7',
        title: 'Page 7',
        pageNumber: 7,
        imagePath: 'src/images/7.jpg',
        text: 'I know that you know this photo very well. <br>I really love this photo of us, baby <3',
        checkboxId: 'checkbox-page7'
    },
    {
        id: 'page8',
        title: 'Page 8',
        pageNumber: 8,
        imagePath: 'src/images/8.jpg',
        text: 'I\'m so happy to know that you really love hugs, mahal <3',
        checkboxId: 'checkbox-page8'
    },
    {
        id: 'page9',
        title: 'Page 9',
        pageNumber: 9,
        imagePath: 'src/images/9.jpg',
        text: 'I\'m going to hug you all day long if you want! <3',
        checkboxId: 'checkbox-page9'
    },
    {
        id: 'page10',
        title: 'Page 10',
        pageNumber: 10,
        imagePath: 'src/images/10.jpg',
        text: 'I really love it when you put your face near mine, jae-jae <3',
        checkboxId: 'checkbox-page10'
    },
    {
        id: 'page11',
        title: 'Page 11',
        pageNumber: 11,
        imagePath: 'src/images/11.jpg',
        text: 'I think your brutal side started to show here :P',
        checkboxId: 'checkbox-page11'
    },
    {
        id: 'page12',
        title: 'Page 12',
        pageNumber: 12,
        imagePath: 'src/images/12.jpg',
        text: 'First out of town date with my baby jae-jae on my 19th birthday <3',
        checkboxId: 'checkbox-page12'
    },
    {
        id: 'page13',
        title: 'Page 13',
        pageNumber: 13,
        imagePath: 'src/images/13.jpg',
        text: 'Date, foods, and <br>jae-jae time <3',
        checkboxId: 'checkbox-page13'
    },
    {
        id: 'page14',
        title: 'Page 14',
        pageNumber: 3,
        imagePath: 'src/images/14.jpg',
        text: 'It\'s only yours, bebe :P',
        checkboxId: 'checkbox-page14'
    },
    {
        id: 'page15',
        title: 'Page 15',
        pageNumber: 15,
        imagePath: 'src/images/15.jpg',
        text: 'Sometimes, when we go out for a date, we look for cute stuffed toys and plushies.',
        checkboxId: 'checkbox-page15'
    },
    {
        id: 'page16',
        title: 'Page 16',
        pageNumber: 16,
        imagePath: 'src/images/16.jpg',
        text: 'Look at what you\'ve found, jae-jae. <br>One of our babies <3',
        checkboxId: 'checkbox-page16'
    },
    {
        id: 'page17',
        title: 'Page 17',
        pageNumber: 17,
        imagePath: 'src/images/17.jpg',
        text: 'I know that we\'ve been through a lot of little fights, mahal.',
        checkboxId: 'checkbox-page17'
    },
    {
        id: 'page18',
        title: 'Page 18',
        pageNumber: 18,
        imagePath: 'src/images/18.jpg',
        text: 'We\'ve been through lots of misunderstandings, but we always make an effort to patch things up afterwards.',
        checkboxId: 'checkbox-page18'
    },
    {
        id: 'page19',
        title: 'Page 19',
        pageNumber: 19,
        imagePath: 'src/images/19.jpg',
        text: 'Babe, I want you to know that I\'m always here to support you.',
        checkboxId: 'checkbox-page19'
    },
    {
        id: 'page20',
        title: 'Page 20',
        pageNumber: 20,
        imagePath: 'src/images/20.jpg',
        text: 'No matter how stressful it is or hard it gets,',
        checkboxId: 'checkbox-page20'
    },
    {
        id: 'page21',
        title: 'Page 21',
        pageNumber: 21,
        imagePath: 'src/images/21.jpg',
        text: 'I assure you that I\'m not gonna leave your side, mahal.',
        checkboxId: 'checkbox-page21'
    },
    {
        id: 'page22',
        title: 'Page 22',
        pageNumber: 22,
        imagePath: 'src/images/22.jpg',
        text: 'I\'m always here to push you forward so that you can achieve your greatest dreams, my love.',
        checkboxId: 'checkbox-page22'
    },
    {
        id: 'page23',
        title: 'Page 23',
        pageNumber: 23,
        imagePath: 'src/images/23.jpg',
        text: 'I want to see you succeed in life,',
        checkboxId: 'checkbox-page23'
    },
    {
        id: 'page24',
        title: 'Page 24',
        pageNumber: 24,
        imagePath: 'src/images/24.jpg',
        text: 'enjoy the comfortable life that we desire,',
        checkboxId: 'checkbox-page24'
    },
    {
        id: 'page25',
        title: 'Page 25',
        pageNumber: 25,
        imagePath: 'src/images/25.jpg',
        text: 'and spend the rest of my life with you, baby jae-jae.',
        checkboxId: 'checkbox-page25'
    },
    {
        id: 'page26',
        title: 'Page 26',
        pageNumber: 26,
        imagePath: 'src/images/26.jpg',
        text: 'I swear that I will always do my best to make you happy.',
        checkboxId: 'checkbox-page26'
    },
    {
        id: 'page27',
        title: 'Page 27',
        pageNumber: 27,
        imagePath: 'src/images/27.jpg',
        text: 'We\'re gonna celebrate every single victory together, no matter how great or small.',
        checkboxId: 'checkbox-page27'
    },
    {
        id: 'page28',
        title: 'Page 28',
        pageNumber: 28,
        imagePath: 'src/images/28.jpg',
        text: 'As long as you are happy, I\'m also happy.',
        checkboxId: 'checkbox-page28'
    },
    {
        id: 'page29',
        title: 'Page 29',
        pageNumber: 29,
        imagePath: 'src/images/29.jpg',
        text: 'I intend to look at your beautiful smile and protect it for the rest of my life, baby.',
        checkboxId: 'checkbox-page29'
    },
    {
        id: 'page30',
        title: 'Page 30',
        pageNumber: 30,
        imagePath: 'src/images/30.jpg',
        text: 'I love you so much and Happy Valentine\'s Day, baby jae-jae! <3',
        checkboxId: 'checkbox-page30'
    },
    {
        id: 'page31',
        title: 'Page 31',
        pageNumber: 31,
        hasImage: false,
        text: 'We and papa dei-dei love you so much, mama jae-jae! <3',
        checkboxId: 'checkbox-page31'
    },
];