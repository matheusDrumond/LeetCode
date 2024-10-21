let merge = function (nums1, m, nums2, n) {
    let arr = Array(m + n);

    let p1 = 0,
        p2 = 0,
        i = 0;

    while (p1 < m && p2 < n) {
        if (nums1[p1] < nums2[p2]) {
            arr[i] = nums1[p1];
            p1++;
        } else {
            arr[i] = nums2[p2];
            p2++;
        }

        i++;
    }

    if (p1 < m) {
        while (i < m + n && p1 < m) {
            arr[i] = nums1[p1];
            i++;
            p1++;
        }
    }

    if (p2 < n) {
        while (i < m + n && p2 < n) {
            arr[i] = nums2[p2];
            i++;
            p2++;
        }
    }

    for (let k = 0; k < m + n; k++) {
        nums1[k] = arr[k];
    }
};
