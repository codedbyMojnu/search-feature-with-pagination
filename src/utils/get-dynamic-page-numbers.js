// ✅ Pagination তৈরির জন্য দরকার হয় ৪টি প্যারামিটার:
// ১. currentValue: ইউজার এখন কোন পেজে আছেন
// ২. maxVisiblePages: UI-তে একসাথে কয়টা পেজ নাম্বার দেখাবো
// ৩. itemsPerPage: প্রতি পেজে কয়টা আইটেম দেখাবো
// ৪. totalItems: মোট কয়টা ডাটা আছে

export default function getDynamicPageNumbers(
    currentValue,
    maxVisiblePages,
    itemsPerPage,
    totalItems
) {
    // মোট কতগুলো পেজ লাগবে, তা হিসাব করি
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // ✅ visible পেজগুলো কোথা থেকে শুরু হবে তা নির্ধারণ করি
    let start = Math.max(currentValue - Math.floor(maxVisiblePages / 2), 1);

    // ✅ শেষ পেজ নাম্বার নির্ধারণ করি
    let end = start + maxVisiblePages - 1;

    // ✅ যদি end পেজটি totalPages এর চেয়ে বেশি হয়ে যায়, তাহলে সেটি ঠিক করি
    if (end > totalPages) {
        end = totalPages;
        start = Math.max(end - maxVisiblePages + 1, 1); // আবার start ঠিক করে নেই
    }

    // ✅ নির্ধারিত start থেকে end পর্যন্ত পেজ নাম্বার তৈরি করি
    const pages = [];
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return pages;
}
