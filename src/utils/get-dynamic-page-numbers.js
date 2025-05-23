// এই পেজিনেশনটি আমাদের টোটাল ৪ টি প্যারামিটার লাগবে
// ১। TotalPage কয়টা হবে তা হিসাব করা। (TotalItems / ItemsPerPage + 1) ItemsPerPage = value we set
// ২। Current Page Value কত? 
// ৩।  UI এ maxVisiblePage কয়টা হবে, সেই ভেলু দিই। 

export default function getDynamicPageNumbers(currentValue, maxVisiblePages, itemsPerPage, totalItems) {

    const totalPage = Math.ceil(totalItems / itemsPerPage);
    // সক্রিয় পেজ ভেলুর মান নিয়ে নতুন Pages Return করার জন্য start মান কত হবে তা হিসাব করা
    let start = Math.max(currentValue - (Math.floor(maxVisiblePages / 2)), 1);
    // সক্রিয় পেজ ভেলুর মানটি নিয়ে নতুন Pages Return করার জন্য end মান কত হবে তা হিসাব করা 
    let end = start + maxVisiblePages - 1;

    // যদি সক্রিয় পেজ ভেলুর মানের জন্য end মানটি totalPage এর থেকে বড় হয়ে যায়
    if (end > totalPage) {
        // সেক্ষেত্রে end হবে totalPage এর মানটি 
        end = totalPage;
        // এবং start এর মানটি হিসেব করে নিতে হবে 
        start = Math.max(end - maxVisiblePages + 1, 1)
    }

    const pages = [];

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }


    return pages;
}
