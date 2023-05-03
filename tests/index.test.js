const { app, PORT } = require('../index'); 
const request = require('supertest'); 
const axios = require('axios'); 

describe('PORT', function() {
    it('PORT is 8000 on development', function() {
        expect(PORT).toBe(8000); 
    }); 
}); 

describe('GET /', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /capsules', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/capsules')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/capsules')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /capsules/*', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/capsules/*')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/capsules/*')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
    it('should return true if requested serial no. is in database', () => {
        axios.get('http://localhost:8000/capsules/serial/C103')
        .then((response) => {
            let serialValue = response.data.capsule.serial;
            expect(Boolean(serialValue)).toBe(true);
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    }); 
    it('should return error message if requested serial no. is NOT in database', () => {
        axios.get('http://localhost:8000/capsules/serial/99')
        .then((response) => {
            expect(response.data.message).toBe("Data not found. Please try again.");
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    }); 

}); 


describe('GET /company', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/company')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/company')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /cores', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/cores')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/cores')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });

}); 

describe('GET /cores/*', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/cores')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/cores')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
    it('should return true if requested serial no. is in database', () => {
        axios.get('http://localhost:8000/cores/serial/Merlin1A')
        .then((response) => {
            let serialValue = response.data.core.serial;
            expect(Boolean(serialValue)).toBe(true);
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    }); 
    it('should return error message if requested serial no. is NOT in database', () => {
        axios.get('http://localhost:8000/cores/serial/99')
        .then((response) => {
            expect(response.data.message).toBe("Data not found. Please try again.");
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    }); 

}); 


describe('GET /crew', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/crew')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/crew')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /dragons', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/dragons')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/dragons')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /dragons/*', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/dragons')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/dragons')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    }); 
    it('should return true if requested id is in database', () => {
        axios.get('http://localhost:8000/dragons/id/5e9d058759b1ff74a7ad5f8f')
        .then((response) => {
            let idValue = response.data.dragon.id;
            expect(Boolean(idValue)).toBe(true);
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    }); 
    it('should return error message if requested name is NOT in database', () => {
        axios.get('http://localhost:8000/dragons/name/99')
        .then((response) => {
            expect(response.data.message).toBe("Data not found. Please try again.");
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    });
}); 


describe('GET /landpads', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/landpads')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/landpads')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /landpads/*', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/landpads')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/landpads')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
    it('should return true if requested name is in database', () => {
        axios.get('http://localhost:8000/landpads/name/LZ-1')
        .then((response) => {
            let nameValue = response.data.landpad.name;
            expect(Boolean(nameValue)).toBe(true);
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    }); 
    it('should return error message if requested info is NOT in database', () => {
        axios.get('http://localhost:8000/landpads/name/99')
        .then((response) => {
            expect(response.data.message).toBe("Data not found. Please try again.");
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    });
}); 

describe('GET /launches', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/launches')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/launches')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /launches/*', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/launches')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/launches')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
    it('should return true if requested name is in database', () => {
        axios.get('http://localhost:8000/launches/name/FalconSat')
        .then((response) => {
            console.log(response.data); 
            let nameValue = response.data.launch.name;
            expect(Boolean(nameValue)).toBe(true);
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    }); 
    it('should return error message if requested info is NOT in database', () => {
        axios.get('http://localhost:8000/launches/name/99')
        .then((response) => {
            expect(response.data.message).toBe("Data not found. Please try again.");
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    });
}); 

describe('GET /launchpads', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/launchpads')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/launchpads')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /launchpads/*', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/launchpads')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/launchpads')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
    it('should return true if requested serial no. is in database', () => {
        axios.get('http://localhost:8000/launchpads/name/VAFB SLC 3W')
        .then((response) => {
            let serialValue = response.data.launchpad.name;
            expect(Boolean(serialValue)).toBe(true);
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    }); 
    it('should return error message if requested name is NOT in database', () => {
        axios.get('http://localhost:8000/launchpads/name/99')
        .then((response) => {
            expect(response.data.message).toBe("Data not found. Please try again.");
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    });
}); 

describe('GET /payloads', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/payloads')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/payloads')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /roadster', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/roadster')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/roadster')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /rockets', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/rockets')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/rockets')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /ships', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/ships')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/ships')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /starlink', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/starlink')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/starlink')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 

describe('GET /history', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/history')
        .expect(200, done); 
    }); 
    it('should respond with json', () => {
        request(app) 
        .get('/history')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
}); 