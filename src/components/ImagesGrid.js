import { useState } from 'react';
import {
    GridList,
    IconButton,
    GridListTile,
    GridListTileBar,
    Dialog
} from '@material-ui/core';
import ZoomIn from '@material-ui/icons/ZoomIn'
import Modal from './Modal'

const ImagesGrid = ({ images }) => {
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState(null);

    const handleClickIcon = (img) => {
        setOpen(true)
        setImg(img)
    }

    const handleClose = () => {
        setOpen(false);
        setImg(null)
    }

    return (
        <>
            <GridList cols={3} style={{ marginTop: '4px' }}>
                {
                    images.map((img) => (
                        <GridListTile key={img.id}>
                            < img src={img.largeImageURL} alt={img.largeImageURL} />
                            <GridListTileBar
                                title={img.tags}
                                subtitle={img.user}
                                actionIcon={
                                    <IconButton aria-label={'zoom in'} onClick={() => handleClickIcon(img)}>
                                        <ZoomIn color="secondary" />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))
                }
            </GridList>
            <Dialog onClose={handleClose} fullWidth={true}
                aria-labelledby="customized-dialog-title" open={open}>
                {img && (<Modal img={img} style={{ width: '40%' }} />)}
            </Dialog>
        </>
    )
}

export default ImagesGrid