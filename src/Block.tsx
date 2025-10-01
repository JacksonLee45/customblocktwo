import {
    type Asset,
    useBlockSettings,
    useBlockAssets,
    rgbObjectToRgbString,
    useColorPalettes,
} from '@frontify/app-bridge';
import { type BlockProps } from '@frontify/guideline-blocks-settings';
import { useEffect, useState, type FC } from 'react';

import ColorSwatch from './ColorSwatch';

interface Settings {
    colorInput: { red: number; green: number; blue: number; alpha: number };
}

export const AnExampleBlock: FC<BlockProps> = ({ appBridge }) => {
    const [blockSettings] = useBlockSettings<Settings>(appBridge);
    const { colorPalettes } = useColorPalettes(appBridge);
    const [blockAsset, setBlockAsset] = useState<Asset | null>(null);
    const { blockAssets } = useBlockAssets(appBridge);

    useEffect(() => {
        const uploadedAsset = blockAssets.assetUpload?.[0];
        if (uploadedAsset) {
            setBlockAsset(uploadedAsset);
        }
    }, [blockAssets]);

    console.log(blockSettings);
    console.log(colorPalettes);

    return (
        <div className="tw-p-6">
            <h2
                className="tw-text-2xl tw-font-bold tw-mb-4 tw-p-4 tw-rounded-lg"
                style={{ backgroundColor: rgbObjectToRgbString(blockSettings.colorInput) }}
            >
                Color Palette Explorer
            </h2>

            {blockAsset?.previewUrl && (
                <div className="tw-mb-6">
                    <img
                        src={blockAsset.previewUrl}
                        alt="Uploaded asset"
                        className="tw-max-w-md tw-rounded-lg tw-shadow-md"
                    />
                </div>
            )}

            {colorPalettes && colorPalettes.length > 0 ? (
                <div className="tw-space-y-8">
                    {colorPalettes.map((palette) => (
                        <div key={palette.id} className="tw-border tw-border-gray-200 tw-rounded-lg tw-p-6">
                            <h3 className="tw-text-xl tw-font-semibold tw-mb-4">{palette.name}</h3>

                            <div className="tw-flex tw-flex-wrap tw-gap-4">
                                {palette.colors.map((color) => (
                                    <div key={color.id} className="tw-flex tw-flex-col tw-items-center tw-gap-2">
                                        <ColorSwatch color={rgbObjectToRgbString(color)} />
                                        {color.name && (
                                            <span className="tw-text-sm tw-text-gray-600 tw-text-center tw-max-w-[80px] tw-truncate">
                                                {color.name}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="tw-text-gray-500 tw-italic">No color palettes available</p>
            )}
        </div>
    );
};
