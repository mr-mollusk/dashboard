import clsx from 'clsx';
import React from 'react';
import {
    AvailableTypographyStyles,
    AvailableTypographyTextDecorations,
    AvailableTypographyVariants,
    AvailableTypographyWeights,
} from '../../types/typography';
import styles from './Typography.module.css';

export type TypographyProps = {
    variant: AvailableTypographyVariants;
    textDecoration?: AvailableTypographyTextDecorations;
    weight?: AvailableTypographyWeights;
    style?: AvailableTypographyStyles;
};

const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({
    children,
    variant,
    textDecoration = '',
    weight = '',
    style = '',
}) => {
    return (
        <p
            className={clsx(
                styles.typography,
                styles[variant],
                styles[textDecoration],
                styles[weight],
                styles[style],
            )}
        >
            {children}
        </p>
    );
};

export default Typography;
