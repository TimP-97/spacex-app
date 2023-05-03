const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs'); 

app.get('/', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/company')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.render('index', { company: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});
//====================CAPSULES=====================
app.get('/capsules', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/capsules')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.render('capsules', { capsules: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/capsules-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/capsules')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      return res.json({ capsules: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/capsules/*', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/capsules')
    .then(function (response) {
     

      const capsuleArray = [];
      for (let i = 0; i < response.data.length; i++) {
        let capsule = response.data[i];
        let userRequest = req.params['0'].split('/');
        if (userRequest[0] === 'serial') { //responding to serial search req.params['0'].includes('serial') && capsule.serial === userRequest[1].toUpperCase()
           if (capsule.serial === userRequest[1]) {
            return res.json({ capsule }); 
           }
        } else if (userRequest[0] === 'reuse_count') { //responding to reuse_count search
          let countValue = parseInt(userRequest[1]);
          //check the count value
          if (capsule.reuse_count === countValue) {
            capsuleArray.push(capsule);
          }
        } else if (req.params['0'].includes('id') && capsule.id === userRequest[1]) {
          return res.json({ capsule });

        } else if (userRequest[0] === 'water_landings') { //responding to water_landings search
          let countValue = parseInt(userRequest[1]);
          if (capsule.water_landings === countValue) {
            capsuleArray.push(capsule);
          }
        } else if (req.params[0].includes('status') && capsule.status === userRequest[1]) { //responding to status search
          capsuleArray.push[capsule]; 
        } else if (req.params[0].includes('type') && capsule.type === userRequest[1]) {
          capsuleArray.push(capsule); 
        }   //responding to type search
        else  {
          return res.json({ message: 'Data not found, please try again' });
        }
      }
      if (capsuleArray.length < 1) {
        return res.json({ message: "Data not found. Please try again."})
      } else {
        return res.json({ capsules: capsuleArray })
      };
    })
})
//====================COMPANY=====================

app.get('/company', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/company')
    .then(function (response) {
      return res.json({ data: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});
//====================CORES=====================
app.get('/cores', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/cores')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      return res.render('cores', { cores: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/cores-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/cores')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      return res.json({ data: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/cores/*', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/cores')
  .then(function (response) {
    const coresArray = []; 
    for (let i = 0; i < response.data.length; i++) {

      let core = response.data[i]; 
      let userRequest = req.params['0'].split('/'); 
      if (userRequest[0] === 'reuse_count') {
        let countValue = parseInt(userRequest[1]); 
        if (core.reuse_count === countValue) {
          coresArray.push(core); 
        }

      } else if (userRequest[0] === 'rtls_attempts') {
        let countValue = parseInt(userRequest[1]); 
        if (core.rtls_attempts === countValue) {
          coresArray.push(core); 
        }

      } else if (userRequest[0] === 'rtls_landings') {
        let countValue = parseInt(userRequest[1]); 
        if (core.rtls_attempts === countValue) {
          coresArray.push(core); 
        }

      } else if (userRequest[0] === 'asds_attempts') {
        let countValue = parseInt(userRequest[1]); 
        if (core.asds_attempts === countValue) {
          coresArray.push(core); 
        }

      } else if (userRequest[0] === 'serial') {
         if (core.serial === userRequest[1]) {
          return res.json({ core });  
         } 
      }
    }
    if (coresArray.length < 1) {
      return res.json({ message: "Data not found. Please try again."})
    } else {
      return res.json({ message: coresArray })
    }; 
  })
  .catch((error) => {
    // console.log(error); 
    console.log(error);
  });
}); 

//=======================CREW========================
app.get('/crew', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/crew')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.render('crew', { crew: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/crew-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/crew')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      return res.json({ data: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});


app.get('/crew/:id', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/crew')
    .then(function (response) {
      //
      for (let i = 0; i < response.data.length; i++) {
        let crew = response.data[i];
        if (crew.id === req.params.id) {
          return res.json({ crew: crew });
        }
      }
      return res.json({ message: 'Could not find requested crew member' });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

//====================Dragons==============
app.get('/dragons', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/dragons')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.render('dragons', { dragon: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/dragons-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/dragons')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      return res.json({ dragon: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/dragons/*', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/dragons')
    .then(function (response) {
      const dragonArray = []; 
      for (let i = 0; i < response.data.length; i++) {
  
        let dragon = response.data[i]; 
        let userRequest = req.params['0'].split('/'); 
  
        if (userRequest[0] === 'name') {
          if (userRequest[1] === dragon.name) {
            return res.json({ dragon }); 
          }
  
        } else if (userRequest[0] === 'type') {
          if (userRequest[1] === dragon.type) {
            return res.json({ dragon }); 
          }
  
        } else if (userRequest[0] === 'active') {
          if (userRequest[1] === dragon.active) {
            return res.json({ dragon }); 
          }
  
        } else if (userRequest[0] === 'crew_capacity') {
          let countValue = parseInt(userRequest[1]); 
          if (dragon.crew_capacity === countValue) {
            dragonArray.push(dragon); 
          }
  
        } else if (userRequest[0] === 'id') {
           if (dragon.id === userRequest[1]) {
            return res.json({ dragon });  
           } 
        }
      }
      if (dragonArray.length < 1) {
        return res.json({ message: "Data not found. Please try again."})
      } else {
        return res.json({ message: dragonArray })
      }; 
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

//==================Landpads==================
app.get('/landpads', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/landpads')
    .then(function (response) {
      res.render('landpads', { landpads: response.data })
    })

    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/landpads-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/landpads')
    .then(function (response) {
      res.json({ data: response.data })
    })

    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/landpads/*', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/landpads')
    .then(function (response) {
      const landpadArray = []; 
      for (let i = 0; i < response.data.length; i++) {
  
        let landpad = response.data[i]; 
        let userRequest = req.params['0'].split('/'); 
  
        if (userRequest[0] === 'name') {
          if (userRequest[1] === landpad.name) {
            return res.json({ landpad }); 
          }
  
        } else if (userRequest[0] === 'type') {
          if (userRequest[1] === landpad.type) {
            return res.json({ landpad }); 
          }
  
        } else if (userRequest[0] === 'full_name') {
          if (userRequest[1] === landpad.active) {
            return res.json({ landpad }); 
          }
  
        } else if (userRequest[0] === 'locality') {
          let countValue = parseInt(userRequest[1]); 
          if (landpad.crew_capacity === countValue) {
            landpadArray.push(landpad); 
          }
  
        } else if (userRequest[0] === 'id') {
           if (landpad.id === userRequest[1]) {
            return res.json({ landpad });  
           } 
        }
      }
      if (landpadArray.length < 1) {
        return res.json({ message: "Data not found. Please try again."})
      } else {
        return res.json({ message: landpadArray })
      }; 

    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

//==========================Launches======================
app.get('/launches', function (req, res) {
  axios.get('https://api.spacexdata.com/v5/launches')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.render('launches', { launches: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/launches-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v5/launches')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.json({ launches: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/launches/*', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/launches')
    .then(function (response) {
      const launchArray = []; 
      for (let i = 0; i < response.data.length; i++) {
  
        let launch = response.data[i]; 
        let userRequest = req.params['0'].split('/'); 
  
        if (userRequest[0] === 'name') {
          if (userRequest[1] === launch.name) {
            return res.json({ launch }); 
          }
  
        } else if (userRequest[0] === 'success') {
          if (userRequest[1] === launch.success) {
            launchArray.push(launch); 
          }
  
        } else if (userRequest[0] === 'auto_update') {
          if (userRequest[1] === launch.active) {
            return res.json({ launch }); 
          }
  
        } else if (userRequest[0] === 'upcoming') {
          if (userRequest[1] === launch.upcoming) {
            return res.json({ launch }); 
          }
  
        } else if (userRequest[0] === 'id') {
           if (launch.id === userRequest[1]) {
            return res.json({ launch });  
           } 
        }
      }
      if (launchArray.length < 1) {
        return res.json({ message: "Data not found. Please try again."})
      } else {
        return res.json({data: launchArray}); 
      }
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

//==================Launchpads===================
app.get('/launchpads', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/launchpads')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.render('launchpads', { launchpads: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/launchpads-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/launchpads')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.json({ data: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/launchpads/*', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/launchpads')
    .then(function (response) {
      const launchpadArray = []; 
      for (let i = 0; i < response.data.length; i++) {
  
        let launchpad = response.data[i]; 
        let userRequest = req.params['0'].split('/'); 
  
        if (userRequest[0] === 'name') {
          if (userRequest[1] === launchpad.name) {
            return res.json({ launchpad }); 
          }
  
        } else if (userRequest[0] === 'full_name') {
          if (userRequest[1] === launchpad.type) {
            return res.json({ launchpad }); 
          }
  
        } else if (userRequest[0] === 'region') {
          if (userRequest[1] === launchpad.active) {
            return res.json({ launchpad }); 
          }
  
        } else if (userRequest[0] === 'latitude') {
          let countValue = parseInt(userRequest[1]); 
          if (launchpad.latitude === countValue) {
            launchpadArray.push(launchpad); 
          }
  
        } else if (userRequest[0] === 'id') {
           if (launchpad.id === userRequest[1]) {
            return res.json({ launchpad });  
           } 
        }
      }
      if (launchpadArray.length < 1) {
        return res.json({ message: "Data not found. Please try again."})
      } else {
        return res.json({ message: launchpadArray }); 
      }
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

//===================Payloads==============
app.get('/payloads', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/payloads')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.render('payloads', {payloads: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      res.json({ message: 'Data not found. Please try again later.' });
    });
});

app.get('/payloads-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/payloads')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.json({ data: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      res.json({ message: 'Data not found. Please try again later.' });
    });
});


//=====================Roadster Info======================
app.get('/roadster', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/roadster')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.render('roadster', { roadster: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      res.json({ message: 'Data not found. Please try again later.' });
    });
});

app.get('/roadster-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/roadster')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.json({ data: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      res.json({ message: 'Data not found. Please try again later.' });
    });
});


//===================Rockets=========================
app.get('/rockets', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/rockets')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.render('rockets', { rockets: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/rockets-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/rockets')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.json({ data: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

//==================Ships=========================
app.get('/ships', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/ships')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.render('ships', { ships: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/ships-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/ships')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.json({ data: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

//=================Starlink=======================
app.get('/starlink', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/starlink')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.render('starlink', { starlink: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/starlink-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/starlink')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      return res.json({ data: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

//==================History===========================
app.get('/history', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/history')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.render('history', { history: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get('/history-data', function (req, res) {
  axios.get('https://api.spacexdata.com/v4/history')
    .then(function (response) {
      // handle success
      //   console.log(response.data);
      res.json({ data: response.data });
    })
    .catch((error) => {
      // console.log(error); 
      console.log(error);
    });
});

app.get("/search", (req, res) => {
    let result = {};
    // { name: 'capsules', serial: 'C103' }
    // How would we make an axios when the item is different?
    axios.get(`https://api.spacexdata.com/v4/${req.query.item}`)
    .then(function(response) {
      let responseArray = []; 
        for (let key in req.query) {
            if (key === 'item') {
                // do nothing
                continue;
            } else {
                // run for loop to search for key and value
                // key -> serial
                // req.query[key] -> C103
                for (let i = 0; i < response.data.length; i++) {
                    let responseValue = response.data[i];
                    if (responseValue.serial === req.query[key]) { // if the response responseValue.serial is equal the search item C103
                        return res.json({ responseValue });
                    } else if (responseValue.name === req.query[key]) {
                        return res.json({ responseValue }); 
                    } else if (responseValue.id === req.query[key]) {
                      return res.json({ responseValue }); 
                    } else if (responseValue.company === req.query[key]) {
                      responseArray.push(responseValue); 
                    } else if (responseValue.active.toString() === req.query[key]) {
                      responseArray.push(responseValue); 
                    }
                }
            }
        }
        if (responseArray.length < 1) {
          return res.json({ message: 'Data not found. Please try again...' })
        } else {
          return res.json({ responseArray }); 
        }
    })
    .catch(function (error) {
        // console.log(error);
        return res.json({ message: 'Data not found. Please try again later.' });
    });
});

//====================HTML====================
app.get('/index', function (req, res) {
  res.sendFile(__dirname+'/views/index.html');
});

app.get('/about', function (req, res) {
  res.sendFile(__dirname+'/views/about.html');
});

app.get('/blog-directory', function (req, res) {
  res.sendFile(__dirname+'/views/blog-directory.html');
});
//=============================================

//No path found
app.get('/:input', (req, res) => {

 
  res.json({ message: `There is no paramater for /${req.params.input}. Please try anouther route` });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT:`, PORT);
});


module.exports = {
  app,
  PORT
}; 
