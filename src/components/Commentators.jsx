import React from 'react';
import { Commentator } from './Commentator';

export const Commentators = ({ commentators, children, ...rest }) => {
    return <div className="commentators" {...rest}>
        {
            commentators ?
                <>
                    {commentators.map((commentator, i) => (
                        <Commentator commentator={commentator} index={i} key={i} />
                    ))}
                    {children || null}
                </>
                : (children || null)
        }
    </div>
}