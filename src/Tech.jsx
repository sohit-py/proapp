import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class Tech extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='xs'
                    >
                        <AppBar style={{ marginTop:'20px',textAlign:'center'}}>
                            <Typography variant="h3" >
                                Step-3 Technical Skills
                            </Typography>
                        </AppBar>
                        <TextField
                            placeholder='Enter Your Programming Language '
                            label='Programming Language'
                            onChange={handleChange('ProgrammingLanguage')}
                            defaultValue={values.ProgrammingLanguage}
                            margin='normal'
                            fullWidth
                        />

                        <TextField
                            placeholder="Enter Your Libraries"
                            label="Libraries"
                            onChange={handleChange('Libraries')}
                            defaultValue={values.Libraries}
                            margin="normal"
                            fullWidth
                        />

                        <TextField
                            placeholder="Enter Your SubjectOfInterest"
                            label="SubjectOfInterest"
                            onChange={handleChange('SubjectOfInterest')}
                            defaultValue={values.SubjectOfInterest}
                            margin="normal"
                            fullWidth
                        />


                        <Button
                            style={{ width: '20px', marginLeft: '80%', marginBottom: '-42px' }}
                            color='primary'
                            variant='contained'
                            onClick={this.continue}
                            size='large'
                        >Next</Button>

                        <Button
                            style={{ width: '20px', marginLeft: '5%' }}
                            color='secondary'
                            variant='contained'
                            onClick={this.back}
                            size='large'
                        >Prev</Button>
                    </Dialog>
                </>
            </MuiThemeProvider>
        )
    }
}

export default Tech;
