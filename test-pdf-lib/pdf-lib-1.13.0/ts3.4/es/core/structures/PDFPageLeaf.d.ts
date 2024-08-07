import PDFArray from "../objects/PDFArray";
import PDFDict, { DictMap } from "../objects/PDFDict";
import PDFName from "../objects/PDFName";
import PDFNumber from "../objects/PDFNumber";
import PDFObject from "../objects/PDFObject";
import PDFRef from "../objects/PDFRef";
import PDFStream from "../objects/PDFStream";
import PDFContext from "../PDFContext";
import PDFPageTree from "./PDFPageTree";
declare class PDFPageLeaf extends PDFDict {
    static readonly InheritableEntries: string[];
    static withContextAndParent: (context: PDFContext, parent: PDFRef) => PDFPageLeaf;
    static fromMapWithContext: (map: DictMap, context: PDFContext, autoNormalizeCTM?: boolean) => PDFPageLeaf;
    private normalized;
    private readonly autoNormalizeCTM;
    private constructor();
    clone(context?: PDFContext): PDFPageLeaf;
    Parent(): PDFPageTree | undefined;
    Contents(): PDFStream | PDFArray | undefined;
    Annots(): PDFArray | undefined;
    BleedBox(): PDFArray | undefined;
    TrimBox(): PDFArray | undefined;
    ArtBox(): PDFArray | undefined;
    Resources(): PDFDict | undefined;
    MediaBox(): PDFArray;
    CropBox(): PDFArray | undefined;
    Rotate(): PDFNumber | undefined;
    getInheritableAttribute(name: PDFName): PDFObject | undefined;
    setParent(parentRef: PDFRef): void;
    addContentStream(contentStreamRef: PDFRef): void;
    wrapContentStreams(startStream: PDFRef, endStream: PDFRef): boolean;
    addAnnot(annotRef: PDFRef): void;
    setFontDictionary(name: PDFName, fontDictRef: PDFRef): void;
    setXObject(name: PDFName, xObjectRef: PDFRef): void;
    setExtGState(name: PDFName, extGStateRef: PDFRef | PDFDict): void;
    ascend(visitor: (node: PDFPageTree | PDFPageLeaf) => any): void;
    normalize(): void;
    normalizedEntries(): {
        Annots: PDFArray;
        Resources: PDFDict;
        Contents: PDFArray | undefined;
        Font: PDFDict;
        XObject: PDFDict;
        ExtGState: PDFDict;
    };
}
export default PDFPageLeaf;
//# sourceMappingURL=PDFPageLeaf.d.ts.map
