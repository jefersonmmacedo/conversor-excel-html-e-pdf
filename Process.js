class Processor {
    static Process(data) {
        let info = data.split('\r\n');
        info.pop()
        let rows = [];

        info.forEach(row => {
            let arr = row.split(",");
            rows.push(arr);
            
        });
        
    }
    
}


module.exports = Processor;