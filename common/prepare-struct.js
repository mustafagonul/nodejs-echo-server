const struct = require('./struct');


const prepare = () => {
  let s = struct()
            .word8Sle('power')
            .word8Sle('execution')
            .doublele('rand')
            .word32Sle('hlimit');

  s.allocate();

  return s;
}


module.exports =  {
  log: data => {
    let b = Buffer.alloc(14, data, encoding='hex');

    let s = struct()
              .word8Sle('power')
              .word8Sle('execution')
              .doublele('rand')
              .word32Sle('hlimit');
  
    s._setBuff(b);
  
    console.log('power:     ' + s.get('power'));
    console.log('execution: ' + s.get('execution'));
    console.log('rand:      ' + s.get('rand'));
    console.log('hlimit:    ' + s.get('hlimit'));
  },
  
  buffer1: () => {
    let s = prepare();
  
    s.set('power', 1)
    s.set('execution', 1)
    s.set('rand', 100.0)
    s.set('hlimit', 200.0)
  
    return s.buffer();
  },
  
  buffer2: () => {
    let s = prepare();
  
    s.set('power', 2);
    s.set('execution', 2);
    s.set('rand', 300.0);
    s.set('hlimit', 400.0);
  
    return s.buffer();
  }
  
}
