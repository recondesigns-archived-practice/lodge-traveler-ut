import React from 'react'
import styled from 'styled-components'

const Page = styled.main`
    border: 4px solid lightcoral;
`

export default function ListPage() {
    return (
        <Page>
            <p>{'List page'}</p>
        </Page>
    )
}
