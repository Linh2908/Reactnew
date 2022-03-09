function convert (key) {
    switch (key) {
        case 'todos':
            return 'todos';
           
        case 'in-progress':
            return 'inProgress';
           
        case 'done' : 
            return 'done';
           
        case 'need-review' : 
            return 'needReview';
           
        default:
            return;    
    }
}

export {convert} ;
 