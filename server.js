// Shitty Ass Packages
const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
require('dotenv').config();
app.use(express.json())

// Shitty Ass Variables
const PORT = process.env.PORT || '7000'; // Port 7000 Because Why The Fuck Not

// Shitty Ass Still Considered Variable But A Specific Variable For JSON Shit
const users = [
    // { name: 'Name'}
];

// Shitty Ass Section I Would Label By Get Or Post But I've Found Out Is Called Routes (Yes Literally Just Learned This)
app.get('/users', (req, res) => { // Why Would We Even Have This Shitty Ass "Route"
    res.json(users)
})

app.post('/users', async (req, res) => { // Async Because Shitty Ass BCrypt Is A "Asynchronus Library"
    try {
        const salt = await bcrypt.genSalt() // Await Because Shitty Ass BCrypt Is A "Asynchronus Library"
        const hashedPassword = await bcrypt.hash(req.body.password, salt) // Await Because Shitty Ass BCrypt Is Still A "Asynchronus Library"
        const user = { name: req.body.name, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

// Shitty Ass Listening On Port Havin' Ass
app.listen(PORT)

// Shitty Ass YouTube Tutorial I Made This Off Of Because I Can't Code For Shit
// https://www.youtube.com/watch?v=Ud5xKCYQTjM


/*

                                                                                               ÛÛ                                                          
     ÛÛÛÛÛÛÛ                                                                                   ÛÛ                                                          
    ÛÛ     ÛÛÛÛ                                                                                ÛÛÛ                                                         
    Û         ÛÛÛÛ                                                                             Û Û                                                         
    Û            ÛÛÛÛ     Û                                                                    Û ÛÛ                                                        
    ÛÛ              Û     Û                                                                    Û  Û                                                        
     Û                    Û                                                                    Û  ÛÛ                                                       
     ÛÛ                   Û         Û             ÛÛÛÛÛÛÛÛÛÛÛÛÛÛ ÛÛÛÛÛÛÛÛÛÛÛÛÛ   Û       ÛÛ    Û   Û                                                       
      Û                   Û         Û       Û            Û             Û         Û      ÛÛ     Û   Û     ÛÛÛÛÛÛÛ                                           
      ÛÛÛÛ                Û         Û       Û            Û             Û         Û      Û      Û    Û    Û     ÛÛ       ÛÛÛÛÛÛ                             
         ÛÛÛÛÛ            Û          Û      ÛÛ           Û             Û         ÛÛ    ÛÛ      Û    Û    Û              Û                                  
             ÛÛÛÛ         Û          Û       Û           Û             Û          Û   ÛÛ       Û    Û    Û              Û                                  
                ÛÛ        Û          Û       Û           Û             Û          ÛÛ  Û        ÛÛÛÛÛÛÛ   ÛÛ             Û                                  
                 ÛÛ       Û          Û       Û           Û             Û           Û ÛÛ        Û     Û    ÛÛ            ÛÛ                                 
                  ÛÛ      Û          Û       ÛÛ          Û             Û           ÛÛÛ         Û     Û     ÛÛÛ           ÛÛ                                
      Û            ÛÛ     Û          Û        Û          Û             Û            Û          Û      Û      ÛÛÛ          ÛÛÛÛÛÛ                           
      Û             Û     ÛÛÛ        ÛÛ       Û          Û             Û           ÛÛ          Û      Û         ÛÛÛ            Û                           
     ÛÛ             ÛÛ    Û ÛÛÛÛÛÛÛÛÛ Û       Û          Û             Û          ÛÛ          ÛÛ      Û   Û       ÛÛÛÛ         ÛÛ                          
     Û               Û    Û           Û       Û          Û             Û         Û            Û       Û   Û          ÛÛ         Û                          
    ÛÛ              ÛÛ    Û           Û       Û                                 ÛÛ            Û        Û  Û           Û         Û                          
   ÛÛ              ÛÛ     Û           Û       ÛÛ                               ÛÛ             Û        Û  ÛÛ         ÛÛ   ÛÛ ÛÛÛÛ                          
   Û              ÛÛ      Û           ÛÛ       Û                               Û              Û        Û    ÛÛÛÛÛÛÛÛÛÛ     ÛÛÛ                             
   ÛÛÛÛ     ÛÛÛÛÛÛÛ       Û            Û                                                                Û                                                  
       ÛÛÛÛÛÛ             Û            Û                                  Û                                                                                
                          ÛÛ           Û                                  ÛÛ                                                                               
                           Û                                             ÛÛÛÛ                                                                              
                           Û                                             Û  Û                                                                              
                                                                         Û   Û                                                                             
                                                                         Û   Û                                                                             
                           ÛÛÛ                       Û    Û              Û    Û                                                                            
                           Û ÛÛ    ÛÛÛÛÛÛ  ÛÛÛÛÛÛÛ   Û    ÛÛ             Û    Û                                                                            
                          ÛÛ  ÛÛ   ÛÛ      Û         Û     Û             Û     Û       ÛÛÛÛ  ÛÛÛÛÛÛ                                                        
                         ÛÛ    ÛÛ   ÛÛÛ   ÛÛ         Û     Û             Û     Û      ÛÛ  Û        ÛÛÛÛÛÛÛÛ                                                
                        ÛÛ      Û     ÛÛÛ  Û         ÛÛ    Û            ÛÛÛÛÛÛÛÛÛÛÛ   Û   Û        Û                                                       
                        Û ÛÛÛÛÛÛÛÛ      ÛÛÛÛ          Û    Û            Û       Û     ÛÛÛÛÛ        ÛÛ                                                      
                       ÛÛ        Û        ÛÛÛÛ   ÛÛÛ  Û    Û            Û       ÛÛ    ÛÛÛ           Û                                                      
                       Û          Û       ÛÛ ÛÛÛÛÛ    Û    Û            Û        Û    Û ÛÛ          Û                                                      
                       Û          ÛÛ  ÛÛÛÛÛ                             Û        ÛÛ   Û  ÛÛ         Û                                                      
                       Û           Û                                              Û       ÛÛ                                                               




*/