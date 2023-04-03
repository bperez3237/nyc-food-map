import React from 'react'
import { useParams } from 'react-router-dom'

function AccountPage() {
    const {id} = useParams();
    return (
        <div>AccountPage {id}</div>
    )
}

export default AccountPage