import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import Parse from 'parse';

export default function Hello() {
  const [person, setPerson] = useState<Parse.Object>(new Parse.Object());

  const addPerson = async () => {
    // create a new Parse Object instance
    const newPerson = new Parse.Object('Person');
    // define the attributes you want for your Object
    newPerson.set('name', 'John');
    newPerson.set('email', 'john@back4app.com');

    try {
      const result1 = await Parse.Object.saveAll([newPerson]);
      console.log(result1);
      // save it on Back4App Data Store
      const result2 = await newPerson.save();
      console.log(result2);
    } catch (error) {
      console.error('Error saving new person: ', error);
    }
  };

  const fetchPerson = async () => {
    // create your Parse Query using the Person Class you've created
    const query = new Parse.Query('Person').addAscending('createdAt');
    // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
    // query.equalTo('email', 'test@example.com');
    // run the query
    const people = await query.find();
    console.log(people);
    console.log(people[0]);
    console.log(people[0].get('name'));

    let firstPerson;
    [firstPerson] = await query.limit(1).find();
    console.log(firstPerson);

    // firstPerson = await query.first();
    // console.log(firstPerson);

    if (firstPerson != null) {
      // access the Parse Object attributes
      console.log('person name: ', firstPerson.get('name'));
      console.log('person email: ', firstPerson.get('email'));
      console.log('person id: ', firstPerson.id);
      setPerson(firstPerson);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Container maxWidth="lg">
        <Container sx={{ my: 2 }}>
          <Stack spacing={2}>
            <Button variant="contained" disableRipple onClick={addPerson}>Add Person</Button>
            <Button variant="contained" disableRipple onClick={fetchPerson}>Fetch Person</Button>
          </Stack>
        </Container>
        <Container sx={{ mt: 3 }}>
          {!person.isNew() && (
            <div>
              <Stack spacing={0.5}>
                <Typography variant="body1">
                  {`Name: ${person.get('name')}`}
                </Typography>
                <Typography variant="body1">
                  {`Email: ${person.get('email')}`}
                </Typography>
              </Stack>
            </div>
          )}
        </Container>
      </Container>
    </Box>
  );
}
