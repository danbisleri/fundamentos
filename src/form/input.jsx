import React, { useState } from 'react'

export default (props) => {
    let nome = 'Pedro'

    const [nomeAlterado, setNome] = useState('Manuel')
    return (
        <>
            <input type="text" value={nome} />
            <input type="text" value={nomeAlterado} onChange={e => setNome(e.target.value)} />
        </>
    );
};

