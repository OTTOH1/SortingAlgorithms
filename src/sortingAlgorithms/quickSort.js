export function getQuickSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    quickSortHelper(arr, animations);

    return animations;
}

function quickSortHelper(arr, animations) {
    quickSort(arr, 0, arr.length - 1, animations);
}

function quickSort(arr, left, right, animations) {
    if (left < right) {
        var pivot = right;
        var partitionIndex = partition(arr, pivot, left, right, animations);

        //sort left and right
        quickSort(arr, left, partitionIndex - 1, animations);
        quickSort(arr, partitionIndex + 1, right, animations);
    }
    return arr;
}

function partition(arr, pivot, left, right, animations) {
    var pivotValue = arr[pivot],
        partitionIndex = left;

    for (var i = left; i < right; i++) {
        animations.push([i, pivot, "comparingSet"]);
        animations.push([i, pivot, "comparingRestore"]);
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex, animations);
            partitionIndex++;
        }
    }

    swap(arr, right, partitionIndex, animations);
    return partitionIndex;
}

function swap(array, left, right, animations) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;

    animations.push([left, array[left], "swapping"]);
    animations.push([right, array[right], "swapping"]);
}
