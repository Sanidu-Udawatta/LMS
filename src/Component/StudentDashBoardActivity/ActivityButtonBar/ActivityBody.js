import React, {useState} from 'react';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,

    MDBInput,

} from 'mdb-react-ui-kit';
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

function ActivityBody() {
    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    return (
        <section>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100 ">

                    <MDBContainer className="main-section">

                        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>

                            <Grid container spacing={3}>
                                <Grid item xs={4} className="tab-btn-item">
                                    <Item>
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')}
                                                         active={justifyActive === 'tab1'}
                                                         className="selector-btn subject-tab shadow rounded ">
                                                English
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                    </Item>
                                </Grid>
                                <Grid item xs={4} >
                                    <Item>
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')}
                                                         active={justifyActive === 'tab2'} className="selector-btn subject-tab shadow rounded">
                                                Maths
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                    </Item>
                                </Grid>

                                <Grid item xs={4} >
                                    <Item>
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleJustifyClick('tab3')}
                                                         active={justifyActive === 'tab3'} className="selector-btn subject-tab shadow rounded">
                                                Environmental Studies
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                    </Item>
                                </Grid>
                            </Grid>


                        </MDBTabs>

                        <MDBTabsContent className="body-content">

                            <MDBTabsPane show={justifyActive === 'tab1'}>





                            </MDBTabsPane>

                            <MDBTabsPane show={justifyActive === 'tab2'}>


                            </MDBTabsPane>

                            <MDBTabsPane show={justifyActive === 'tab3'}>



                            </MDBTabsPane>

                        </MDBTabsContent>

                    </MDBContainer>


                </div>
            </div>

        </section>

    );
}

export default ActivityBody;