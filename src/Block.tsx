import { Asset, useBlockSettings, useBlockAssets, rgbObjectToRgbString, useColorPalettes, type ColorPalette } from '@frontify/app-bridge';
import { type BlockProps, type Color as ColorExample } from '@frontify/guideline-blocks-settings';
import { useEffect, useState, type FC } from 'react';

interface Settings{
    colorInput: {red: number, green: number, blue: number, alpha: number }
}

export const AnExampleBlock: FC<BlockProps> = ({ appBridge }) => {
    const [blockSettings] = useBlockSettings<Settings>(appBridge);
    const { colorPalettes } = useColorPalettes(appBridge); 
    const [blockAsset, setBlockAsset] = useState<Asset | null>(null);
    const {blockAssets} = useBlockAssets(appBridge);
    // const ourColor =  rgbObjectToRgbString(blockSettings.color)

    useEffect(() => {
        const uploadedAsset = blockAssets['assetUpload']?.[0];
        if(uploadedAsset){
            setBlockAsset(uploadedAsset);
        }
        
    }, [blockAssets])

    console.log(blockSettings);
    console.log(colorPalettes);

    return (
        <span>
            <h2 style={{backgroundColor: rgbObjectToRgbString(blockSettings.colorInput)}} > hello! </h2>
            <p>hello world</p>
            <img src={blockAsset?.previewUrl}> 
            </img>
            {blockAsset?.previewUrl}
        </span>
    );
};