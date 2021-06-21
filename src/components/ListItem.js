import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 0px 16px 0px 16px;
    // border: 1px solid dodgerblue;
    // border-bottom: 2px solid rgba(65, 65, 65, 0.2);
`

const Title = styled.h4`
    margin-bottom: 12px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: #414141;
    // border: 1px dashed green;
`

const Heading = styled.h5`
    margin-bottom: 4px;
    font-family: Open Sans Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #414141;
    // border: 1px dashed green;
`

const Text = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #414141;
    // border: 1px dashed green;
`

const BottomBorder = styled.div`
    margin-top: 12px;
    width: 100%;
    height: 2px;
    background: rgba(65, 65, 65, 0.2);
`

const MeetingsWrapper = styled.div`
    margin-bottom: 12px;
    // border: 1px dashed green;
`

const AddressWrapper = styled.div`
    // border: 1px dashed green;
`

export default function ListItem(props) {
    const {
        name,
        number,
        address,
        city,
        state,
        zipcode,
        // county,
        meetings
    } = props

    return (
        <Container>
            <Title>{`${name} No. ${number}`}</Title>
            <MeetingsWrapper>
                <Heading>{'Meetings'}</Heading>
                <Text>{`${meetings}`}</Text>
            </MeetingsWrapper>
            <AddressWrapper>
                <Heading>{'Address'}</Heading>
                <Text>{`${address}`}</Text>
                <Text>{`${city}, ${state}  ${zipcode}`}</Text>
            </AddressWrapper>
            <BottomBorder />
        </Container>
    )
}
