// import { AssetChooserObjectType, AssetChooserProjectType } from '@frontify/app-bridge';
import { AssetChooserObjectType, AssetChooserProjectType, AssetInputMode, IconEnum, defineSettings } from '@frontify/guideline-blocks-settings';

export const settings = defineSettings({
    main: [
        // {
        //     id: 'main-dropdown',
        //     type: 'dropdown',
        //     defaultValue: 'content_block',
        //     size: 'large',
        //     disabled: true,
        //     choices: [
        //         {
        //             value: 'content_block',
        //             icon: IconEnum.BuildingBlock,
        //             label: 'Content Block',
        //         },
        //     ],
        // },
        {
            id: 'assetUpload',
            type: 'assetInput',
            multiSelection: false,
            mode: AssetInputMode.BrowseOnly,
            projectTypes: [AssetChooserProjectType.MediaLibrary, AssetChooserProjectType.Workspace],
            objectTypes: [AssetChooserObjectType.ImageVideo],
            size: 'large',
        },
        {
            id: 'colorInput',
            type: 'colorInput',
            clearable: true,
        }
    ],
    style: [
        // {
        //     id: 'color',
        //     label: 'Text Color',
        //     type: 'slider',
        //     defaultValue: 'violet',
        //     choices: [
        //         { label: 'Violet', value: 'violet' },
        //         { label: 'Blue', value: 'blue' },
        //         { label: 'Green', value: 'green' },
        //         { label: 'Red', value: 'red' },
        //     ],
        // },
    ],
});

