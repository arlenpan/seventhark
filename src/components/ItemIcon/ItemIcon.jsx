import { Tooltip } from 'antd';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './ItemIcon.module.scss';

export default function Icon({ item, className, tooltipPlacement, width = 32, height = 32 }) {
    return (
        <div className={classNames(styles['icon-wrapper'], className)}>
            {item.imgUrl && (
                <Tooltip title={item.name} placement={tooltipPlacement}>
                    <Image
                        className={styles.icon}
                        src={item.imgUrl}
                        width={width}
                        height={height}
                    />
                </Tooltip>
            )}
        </div>
    );
}
