
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';

function DownloadButtons() {
    return (
        <div className="download-buttons">
            <a href="https://www.example.com" download>
                <button className='download-links' type='button'>

                    Download for iOS <AppleIcon /></button>
            </a>
            <a href="https://www.example.com" download>
                <button className='download-links' type='button'>  Download for Android <ShopIcon /></button>
            </a>
        </div>
    );
}
export default DownloadButtons;