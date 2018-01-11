export function isEmptyArray(obj) {
    if (!Array.isArray(obj)) {
        return true;
    }

    return !obj.length;
}

export function isNotEmptyArray(obj) {
    return !isEmptyArray(obj);
}

export function isEmptyFileList(obj) {
    if (!(obj instanceof  FileList)) {
        return true;
    }

    return !obj.length;
}

export function isNotEmptyFileList(obj) {
    return !isEmptyFileList(obj);
}
