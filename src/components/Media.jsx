import React from 'react'
import Card from './Card'

export default props => {

    const min = props.min

    const max = props.max

    return (
        <Card title="Media dos numeros" blue>
        <div>
            <span>
                <span>Resultado</span>
                <strong>{(max+min/2)}</strong>
            </span>
        </div>
        </Card>
    )
}