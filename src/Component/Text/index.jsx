import React from 'react';
import { useAuth } from '../../Context';

function Text(props) {
    const { content } = useAuth();
    return (
        <div>
            {content}
        </div>
    );
}

export default Text;