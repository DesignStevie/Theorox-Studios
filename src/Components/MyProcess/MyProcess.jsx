import React from 'react'
import { useState, useEffect } from 'react'
import './MyProcess.css'

function MyProcess() {
    let understandSVG = <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6 6.80013C16.6 6.6668 16.6498 6.52235 16.7493 6.3668C16.8498 6.21124 16.9667 6.10013 17.1 6.03346C17.7667 5.7668 18.4502 5.5668 19.1507 5.43346C19.8502 5.30013 20.5778 5.23346 21.3333 5.23346C21.7778 5.23346 22.2 5.26146 22.6 5.31746C23 5.37257 23.4111 5.44458 23.8333 5.53346C23.9889 5.55569 24.1222 5.63346 24.2333 5.7668C24.3444 5.90013 24.4 6.05569 24.4 6.23346C24.4 6.54458 24.3053 6.7668 24.116 6.90013C23.9276 7.03346 23.6889 7.0668 23.4 7.00013C23.0667 6.93346 22.728 6.88902 22.384 6.8668C22.0391 6.84457 21.6889 6.83346 21.3333 6.83346C20.6889 6.83346 20.0556 6.89435 19.4333 7.01613C18.8111 7.1388 18.2222 7.30013 17.6667 7.50013C17.3556 7.63346 17.1 7.63346 16.9 7.50013C16.7 7.3668 16.6 7.13346 16.6 6.80013ZM16.6 14.1001C16.6 13.9446 16.6498 13.789 16.7493 13.6335C16.8498 13.4779 16.9667 13.3668 17.1 13.3001C17.7444 13.0335 18.428 12.8335 19.1507 12.7001C19.8724 12.5668 20.6 12.5001 21.3333 12.5001C21.7778 12.5001 22.2 12.5281 22.6 12.5841C23 12.6392 23.4111 12.7112 23.8333 12.8001C23.9889 12.8446 24.1222 12.9335 24.2333 13.0668C24.3444 13.2001 24.4 13.3557 24.4 13.5335C24.4 13.8224 24.3053 14.0388 24.116 14.1828C23.9276 14.3277 23.6889 14.3668 23.4 14.3001C23.0667 14.2335 22.728 14.1832 22.384 14.1495C22.0391 14.1166 21.6889 14.1001 21.3333 14.1001C20.6889 14.1001 20.0613 14.161 19.4507 14.2828C18.8391 14.4055 18.2556 14.5779 17.7 14.8001C17.3667 14.9335 17.1 14.9277 16.9 14.7828C16.7 14.6388 16.6 14.4112 16.6 14.1001ZM16.6 10.4668C16.6 10.3112 16.6498 10.1557 16.7493 10.0001C16.8498 9.84458 16.9667 9.73346 17.1 9.6668C17.7667 9.40013 18.4502 9.20013 19.1507 9.0668C19.8502 8.93346 20.5778 8.8668 21.3333 8.8668C21.7778 8.8668 22.2 8.89435 22.6 8.94946C23 9.00546 23.4111 9.07791 23.8333 9.1668C23.9889 9.18902 24.1222 9.27213 24.2333 9.41613C24.3444 9.56102 24.4 9.72235 24.4 9.90013C24.4 10.189 24.3053 10.4055 24.116 10.5495C23.9276 10.6944 23.6889 10.7224 23.4 10.6335C23.0667 10.5668 22.728 10.5224 22.384 10.5001C22.0391 10.4779 21.6889 10.4668 21.3333 10.4668C20.6889 10.4668 20.0613 10.5281 19.4507 10.6508C18.8391 10.7726 18.2556 10.9446 17.7 11.1668C17.3667 11.3001 17.1 11.2944 16.9 11.1495C16.7 11.0055 16.6 10.7779 16.6 10.4668ZM6.66667 16.3668C7.77778 16.3668 8.85556 16.489 9.9 16.7335C10.9444 16.9779 11.9778 17.3668 13 17.9001V4.80013C12.0667 4.20013 11.0556 3.74457 9.96667 3.43346C8.87778 3.12235 7.77778 2.9668 6.66667 2.9668C5.86667 2.9668 5.11644 3.03346 4.416 3.1668C3.71644 3.30013 3 3.50013 2.26667 3.7668C2.17778 3.81124 2.11111 3.8668 2.06667 3.93346C2.02222 4.00013 2 4.0668 2 4.13346V16.7335C2 16.8668 2.04444 16.961 2.13333 17.0161C2.22222 17.0721 2.31111 17.0779 2.4 17.0335C3.04444 16.8112 3.71644 16.6446 4.416 16.5335C5.11644 16.4224 5.86667 16.3668 6.66667 16.3668ZM15 17.9001C16.0222 17.3668 17.0556 16.9779 18.1 16.7335C19.1444 16.489 20.2222 16.3668 21.3333 16.3668C22.1333 16.3668 22.8836 16.4224 23.584 16.5335C24.2836 16.6446 24.9556 16.8112 25.6 17.0335C25.6889 17.0779 25.7778 17.0721 25.8667 17.0161C25.9556 16.961 26 16.8668 26 16.7335V4.13346C26 4.0668 25.9778 4.00013 25.9333 3.93346C25.8889 3.8668 25.8222 3.81124 25.7333 3.7668C25 3.50013 24.2836 3.30013 23.584 3.1668C22.8836 3.03346 22.1333 2.9668 21.3333 2.9668C20.2222 2.9668 19.1222 3.12235 18.0333 3.43346C16.9444 3.74457 15.9333 4.20013 15 4.80013V17.9001ZM14 20.3001C13.7333 20.3001 13.4889 20.2668 13.2667 20.2001C13.0444 20.1335 12.8333 20.0446 12.6333 19.9335C11.7222 19.4224 10.7609 19.0335 9.74933 18.7668C8.73867 18.5001 7.71111 18.3668 6.66667 18.3668C5.84444 18.3668 5.04444 18.4557 4.26667 18.6335C3.48889 18.8112 2.73333 19.0779 2 19.4335C1.53333 19.6557 1.08356 19.6224 0.650667 19.3335C0.216889 19.0446 0 18.6335 0 18.1001V3.63346C0 3.34457 0.0724444 3.07213 0.217333 2.81613C0.361333 2.56102 0.577778 2.37791 0.866667 2.2668C1.75556 1.82235 2.69467 1.49435 3.684 1.2828C4.67244 1.07213 5.66667 0.966797 6.66667 0.966797C7.95556 0.966797 9.22222 1.14457 10.4667 1.50013C11.7111 1.85569 12.8889 2.37791 14 3.0668C15.1111 2.37791 16.2889 1.85569 17.5333 1.50013C18.7778 1.14457 20.0444 0.966797 21.3333 0.966797C22.3333 0.966797 23.328 1.07213 24.3173 1.2828C25.3058 1.49435 26.2444 1.82235 27.1333 2.2668C27.4222 2.37791 27.6387 2.56102 27.7827 2.81613C27.9276 3.07213 28 3.34457 28 3.63346V18.1001C28 18.6335 27.7778 19.0392 27.3333 19.3175C26.8889 19.5948 26.4222 19.6224 25.9333 19.4001C25.2 19.0668 24.4502 18.8112 23.684 18.6335C22.9169 18.4557 22.1333 18.3668 21.3333 18.3668C20.2889 18.3668 19.2613 18.5001 18.2507 18.7668C17.2391 19.0335 16.2778 19.4224 15.3667 19.9335C15.1667 20.0446 14.9556 20.1335 14.7333 20.2001C14.5111 20.2668 14.2667 20.3001 14 20.3001Z"/>
                        </svg>
    let researchSVG = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.3665 22.7333L13.6665 15.0667C12.9999 15.6222 12.2332 16.0556 11.3665 16.3667C10.4999 16.6778 9.61098 16.8333 8.69987 16.8333C6.41098 16.8333 4.47765 16.0444 2.89987 14.4667C1.32209 12.8889 0.533203 10.9556 0.533203 8.66667C0.533203 6.4 1.32209 4.472 2.89987 2.88267C4.47765 1.29422 6.41098 0.5 8.69987 0.5C10.9665 0.5 12.8888 1.28889 14.4665 2.86667C16.0443 4.44444 16.8332 6.37778 16.8332 8.66667C16.8332 9.62222 16.6776 10.5333 16.3665 11.4C16.0554 12.2667 15.6332 13.0222 15.0999 13.6667L22.7999 21.3667C22.9776 21.5444 23.0665 21.7667 23.0665 22.0333C23.0665 22.3 22.9665 22.5333 22.7665 22.7333C22.5665 22.9333 22.3279 23.0333 22.0505 23.0333C21.7723 23.0333 21.5443 22.9333 21.3665 22.7333ZM8.69987 14.8333C10.411 14.8333 11.8612 14.2333 13.0505 13.0333C14.239 11.8333 14.8332 10.3778 14.8332 8.66667C14.8332 6.95556 14.239 5.5 13.0505 4.3C11.8612 3.1 10.411 2.5 8.69987 2.5C6.96654 2.5 5.50565 3.1 4.3172 4.3C3.12787 5.5 2.5332 6.95556 2.5332 8.66667C2.5332 10.3778 3.12787 11.8333 4.3172 13.0333C5.50565 14.2333 6.96654 14.8333 8.69987 14.8333Z"/>
                      </svg>
    let ideateSVG = <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6663 23.6663C14.3775 23.6663 14.1388 23.5721 13.9503 23.3837C13.761 23.1943 13.6663 22.9552 13.6663 22.6663C13.6663 22.3775 13.761 22.1383 13.9503 21.949C14.1388 21.7606 14.3775 21.6663 14.6663 21.6663C15.8219 21.6663 16.833 21.433 17.6997 20.9663C18.5663 20.4997 18.9997 19.9552 18.9997 19.333C18.9997 18.8886 18.7886 18.4886 18.3663 18.133C17.9441 17.7775 17.3663 17.4775 16.633 17.233L18.133 15.733C19.0441 16.133 19.7499 16.633 20.2503 17.233C20.7499 17.833 20.9997 18.533 20.9997 19.333C20.9997 20.6886 20.333 21.7495 18.9997 22.5157C17.6663 23.2828 16.2219 23.6663 14.6663 23.6663ZM2.83301 13.733C2.03301 13.3552 1.41656 12.9161 0.983674 12.4157C0.549897 11.9161 0.333008 11.333 0.333008 10.6663C0.333008 9.8219 0.661008 9.10501 1.31701 8.51567C1.97212 7.92723 3.15523 7.25523 4.86634 6.49967C6.28856 5.85523 7.2219 5.37167 7.66634 5.04901C8.11079 4.72723 8.33301 4.37745 8.33301 3.99967C8.33301 3.55523 8.07745 3.16634 7.56634 2.83301C7.05523 2.49967 6.31079 2.33301 5.33301 2.33301C4.73301 2.33301 4.21656 2.41079 3.78367 2.56634C3.3499 2.7219 2.96634 2.96634 2.63301 3.29967C2.45523 3.49967 2.23301 3.61612 1.96634 3.64901C1.69967 3.68279 1.45523 3.61079 1.23301 3.43301C1.01079 3.25523 0.88323 3.03301 0.850341 2.76634C0.816563 2.49967 0.899675 2.25523 1.09967 2.03301C1.47745 1.56634 2.0499 1.16634 2.81701 0.833008C3.58323 0.499674 4.4219 0.333008 5.33301 0.333008C6.8219 0.333008 8.02768 0.671675 8.95034 1.34901C9.87212 2.02723 10.333 2.91079 10.333 3.99967C10.333 4.79967 10.0219 5.5219 9.39968 6.16634C8.77745 6.81079 7.53301 7.53301 5.66634 8.33301C4.33301 8.91079 3.44412 9.36056 2.99967 9.68234C2.55523 10.005 2.33301 10.333 2.33301 10.6663C2.33301 10.9552 2.50545 11.233 2.85034 11.4997C3.19434 11.7663 3.69967 12.0108 4.36634 12.233L2.83301 13.733ZM20.6997 8.99967L16.1663 4.46634L17.433 3.16634C17.8775 2.7219 18.3943 2.49967 18.9837 2.49967C19.5721 2.49967 20.0775 2.7219 20.4997 3.16634L21.9997 4.66634C22.4441 5.08856 22.6663 5.5939 22.6663 6.18234C22.6663 6.77167 22.4441 7.28856 21.9997 7.73301L20.6997 8.99967ZM3.89967 21.2663H5.59967L15.7997 11.0663L14.0997 9.36634L3.89967 19.5663V21.2663ZM2.49967 23.2663C2.3219 23.2663 2.17745 23.2108 2.06634 23.0997C1.95523 22.9886 1.89967 22.8441 1.89967 22.6663V18.9997C1.89967 18.9552 1.95523 18.7997 2.06634 18.533L14.0997 6.49967L18.6663 11.0663L6.63301 23.0997C6.58856 23.1219 6.43301 23.1775 6.16634 23.2663H2.49967Z"/>
                    </svg>
    let prototypeSVG = <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16683 26.1666C3.25572 26.1666 2.47261 25.8386 1.8175 25.1826C1.1615 24.5275 0.833496 23.7443 0.833496 22.8332C0.833496 22.0777 1.05572 21.411 1.50016 20.8332C1.94461 20.2555 2.50016 19.8555 3.16683 19.6332V8.36657C2.50016 8.14435 1.94461 7.74435 1.50016 7.16657C1.05572 6.58879 0.833496 5.92212 0.833496 5.16657C0.833496 4.25546 1.1615 3.4719 1.8175 2.8159C2.47261 2.16079 3.25572 1.83324 4.16683 1.83324C4.92239 1.83324 5.58905 2.05546 6.16683 2.4999C6.74461 2.94435 7.14461 3.4999 7.36683 4.16657H12.7002L10.6335 2.0999C10.4335 1.92212 10.3335 1.6999 10.3335 1.43324C10.3335 1.16657 10.4335 0.922125 10.6335 0.699903C10.8335 0.499903 11.0668 0.399902 11.3335 0.399902C11.6002 0.399902 11.8446 0.499903 12.0668 0.699903L15.6668 4.33324C15.9113 4.57768 16.0335 4.86079 16.0335 5.18257C16.0335 5.50524 15.9113 5.78879 15.6668 6.03324L12.0335 9.66657C11.9446 9.77768 11.8393 9.85546 11.7175 9.8999C11.5948 9.94435 11.4722 9.96079 11.3495 9.94924C11.2277 9.93857 11.1002 9.91101 10.9668 9.86657C10.8335 9.82212 10.7224 9.74435 10.6335 9.63324C10.4335 9.43324 10.3335 9.20568 10.3335 8.95057C10.3335 8.69457 10.4335 8.45546 10.6335 8.23324L12.7002 6.16657H7.36683C7.18905 6.6999 6.91127 7.15546 6.5335 7.53324C6.15572 7.91101 5.70016 8.18879 5.16683 8.36657V19.6332C5.85572 19.8555 6.41705 20.2555 6.85083 20.8332C7.28372 21.411 7.50016 22.0777 7.50016 22.8332C7.50016 23.7443 7.17794 24.5275 6.5335 25.1826C5.88905 25.8386 5.10016 26.1666 4.16683 26.1666ZM21.8335 1.83324C22.7446 1.83324 23.5282 2.16079 24.1842 2.8159C24.8393 3.4719 25.1668 4.25546 25.1668 5.16657C25.1668 6.0999 24.8393 6.88879 24.1842 7.53324C23.5282 8.17768 22.7446 8.4999 21.8335 8.4999C20.9002 8.4999 20.1113 8.17768 19.4668 7.53324C18.8224 6.88879 18.5002 6.0999 18.5002 5.16657C18.5002 4.25546 18.8224 3.4719 19.4668 2.8159C20.1113 2.16079 20.9002 1.83324 21.8335 1.83324ZM4.16683 24.1666C4.54461 24.1666 4.8615 24.0386 5.1175 23.7826C5.37261 23.5275 5.50016 23.211 5.50016 22.8332C5.50016 22.4555 5.37261 22.139 5.1175 21.8839C4.8615 21.6279 4.54461 21.4999 4.16683 21.4999C3.78905 21.4999 3.47216 21.6279 3.21616 21.8839C2.96105 22.139 2.8335 22.4555 2.8335 22.8332C2.8335 23.211 2.96105 23.5275 3.21616 23.7826C3.47216 24.0386 3.78905 24.1666 4.16683 24.1666ZM4.16683 6.4999C4.54461 6.4999 4.8615 6.37235 5.1175 6.11724C5.37261 5.86124 5.50016 5.54435 5.50016 5.16657C5.50016 4.78879 5.37261 4.4719 5.1175 4.2159C4.8615 3.96079 4.54461 3.83324 4.16683 3.83324C3.78905 3.83324 3.47216 3.96079 3.21616 4.2159C2.96105 4.4719 2.8335 4.78879 2.8335 5.16657C2.8335 5.54435 2.96105 5.86124 3.21616 6.11724C3.47216 6.37235 3.78905 6.4999 4.16683 6.4999ZM21.8335 6.4999C22.2113 6.4999 22.5277 6.37235 22.7828 6.11724C23.0388 5.86124 23.1668 5.54435 23.1668 5.16657C23.1668 4.78879 23.0388 4.4719 22.7828 4.2159C22.5277 3.96079 22.2113 3.83324 21.8335 3.83324C21.4557 3.83324 21.1393 3.96079 20.8842 4.2159C20.6282 4.4719 20.5002 4.78879 20.5002 5.16657C20.5002 5.54435 20.6282 5.86124 20.8842 6.11724C21.1393 6.37235 21.4557 6.4999 21.8335 6.4999ZM17.8335 14.5666L19.3002 15.9666L13.0002 22.2666V24.1666H14.8668L21.2002 17.8332L22.6002 19.2332L16.4335 25.4332C16.2113 25.6555 15.9557 25.8332 15.6668 25.9666C15.3779 26.0999 15.0668 26.1666 14.7335 26.1666H12.2002C11.8668 26.1666 11.5833 26.0501 11.3495 25.8172C11.1166 25.5835 11.0002 25.2888 11.0002 24.9332V22.4332C11.0002 22.0999 11.0611 21.7888 11.1828 21.4999C11.3055 21.211 11.4779 20.9555 11.7002 20.7332L17.8335 14.5666ZM22.6002 19.2332L17.8335 14.5666L19.7335 12.6666C20.2002 12.1999 20.7722 11.9666 21.4495 11.9666C22.1277 11.9666 22.7002 12.211 23.1668 12.6999L24.4668 13.9999C24.9335 14.4666 25.1668 15.0332 25.1668 15.6999C25.1668 16.3666 24.9335 16.9332 24.4668 17.3999L22.6002 19.2332Z"/>
                       </svg>
    let validateSVG = <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.36725 22.1331L3.86725 21.3998C3.57836 21.3331 3.34503 21.1722 3.16725 20.9171C2.98947 20.6611 2.92281 20.3886 2.96725 20.0998L3.30059 16.4998L0.933919 13.7998C0.711697 13.5775 0.600586 13.3109 0.600586 12.9998C0.600586 12.6886 0.711697 12.422 0.933919 12.1998L3.30059 9.49975L2.96725 5.89975C2.92281 5.61087 2.98947 5.33842 3.16725 5.08242C3.34503 4.82731 3.57836 4.66642 3.86725 4.59975L7.36725 3.86642L9.20059 0.766421C9.37836 0.499754 9.60592 0.321976 9.88325 0.233087C10.1615 0.144198 10.4339 0.15531 10.7006 0.266421L14.0006 1.66642L17.3006 0.266421C17.5673 0.15531 17.8397 0.144198 18.1179 0.233087C18.3953 0.321976 18.6228 0.499754 18.8006 0.766421L20.6339 3.86642L24.1339 4.59975C24.4228 4.66642 24.6561 4.82731 24.8339 5.08242C25.0117 5.33842 25.0784 5.61087 25.0339 5.89975L24.7006 9.49975L27.0672 12.1998C27.2895 12.422 27.4006 12.6886 27.4006 12.9998C27.4006 13.3109 27.2895 13.5775 27.0672 13.7998L24.7006 16.4998L25.0339 20.0998C25.0784 20.3886 25.0117 20.6611 24.8339 20.9171C24.6561 21.1722 24.4228 21.3331 24.1339 21.3998L20.6339 22.1331L18.8006 25.2331C18.6228 25.4998 18.3953 25.6775 18.1179 25.7664C17.8397 25.8553 17.5673 25.8442 17.3006 25.7331L14.0006 24.3331L10.7006 25.7331C10.4339 25.8442 10.1615 25.8553 9.88325 25.7664C9.60592 25.6775 9.37836 25.4998 9.20059 25.2331L7.36725 22.1331ZM11.7673 16.4331C11.9895 16.6553 12.2673 16.7664 12.6006 16.7664C12.9339 16.7664 13.2117 16.6553 13.4339 16.4331L18.9673 10.8998C19.1673 10.6998 19.2673 10.4606 19.2673 10.1824C19.2673 9.90509 19.1673 9.66642 18.9673 9.46642C18.7673 9.26642 18.5339 9.16642 18.2673 9.16642C18.0006 9.16642 17.7561 9.26642 17.5339 9.46642L12.6006 14.4331L10.4339 12.2664C10.2339 12.0886 9.99481 12.0051 9.71659 12.0158C9.43925 12.0273 9.2117 12.122 9.03392 12.2998C8.83392 12.4998 8.73392 12.7331 8.73392 12.9998C8.73392 13.2664 8.83392 13.4998 9.03392 13.6998L11.7673 16.4331ZM10.6006 23.5998L14.0006 22.1664L17.4339 23.5998L19.3339 20.3998L23.0006 19.5664L22.6672 15.7998L25.1339 12.9998L22.6672 10.1664L23.0006 6.39975L19.3339 5.59975L17.4006 2.39975L14.0006 3.83309L10.5673 2.39975L8.66725 5.59975L5.00059 6.39975L5.33392 10.1664L2.86725 12.9998L5.33392 15.7998L5.00059 19.5998L8.66725 20.3998L10.6006 23.5998Z"/>
                      </svg>

    const RESEARCH_DESC = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/><br/>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.<br/><br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/><br/>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>

    const myInfo = [
        {id: 0,
         title: "Understand",
         description:"Understand description",
         active: true,
         SVG: understandSVG
        },
        {
         id: 1,
         title: "Research",
         description:"Research description",
         active: false,
         SVG: researchSVG
        },
        {
         id: 2,
         title: "Ideate",
         description:"Ideate description",
         active: false,
         SVG: ideateSVG
        },
        {
         id: 3,
         title: "Prototype",
         description:"Prototype description",
         active: false,
         SVG: prototypeSVG
        },
        {
         id: 4,
         title: "Validate",
         description:"Validate description",
         active: false,
         SVG: validateSVG
        }
    ];

        //Get window viewport

        const [windowSize, setWindowSize] = useState(getWindowSize());

        useEffect(() => {
          function handleWindowResize() {
            setWindowSize(getWindowSize());
          }
      
          window.addEventListener('resize', handleWindowResize);
      
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
        }, []);
    
        function getWindowSize() {
            const {innerWidth, innerHeight} = window;
            return {innerWidth, innerHeight};
          }

    const [info, setInfo] = useState(myInfo)
    const [current, setCurrent] = useState(myInfo[0])
    const listItemsDesktop = info.map((item, index) => {
        return (
        <> 
        {windowSize.innerWidth > 481 ?
            <div className={(item.active ? "process-button active" : "process-button")} onClick={() => HandleChange(index)} key={index}>
                {item.SVG}
            </div>
        :
            <div className={(item.active ? "mobile-process-button opened" : "mobile-process-button closed")} onClick={() => HandleChange(index)} key={index}>
                <div className='mobile-process-button-header'>
                    {item.SVG}
                    <h4>{item.title}</h4>
                    <svg className='mobile-chevron' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.9999 6.64984C5.88324 6.64984 5.7709 6.63317 5.6629 6.59984C5.55424 6.5665 5.45824 6.49984 5.3749 6.39984L0.849902 1.89984C0.716569 1.74984 0.649902 1.57484 0.649902 1.37484C0.649902 1.17484 0.724902 0.999838 0.874902 0.849838C1.0249 0.716505 1.1999 0.649838 1.3999 0.649838C1.5999 0.649838 1.7749 0.716505 1.9249 0.849838L5.9999 4.92484L10.0999 0.849838C10.2332 0.699838 10.3999 0.628838 10.5999 0.636838C10.7999 0.645505 10.9749 0.716505 11.1249 0.849838C11.2749 0.999838 11.3499 1.17884 11.3499 1.38684C11.3499 1.5955 11.2749 1.7665 11.1249 1.89984L6.6249 6.39984C6.54157 6.49984 6.4459 6.5665 6.3379 6.59984C6.22924 6.63317 6.11657 6.64984 5.9999 6.64984Z"/>
                    </svg>
                </div>
                <div className={item.active ? "mobile-process-content-opened" : "mobile-process-content"}>
                    {RESEARCH_DESC}
                </div> 
            </div>
        }
    </>
    )
   })

    function HandleChange(index) {
        const newState = info.map((listItemsDesktop, key) => {
            if ( key === index){
                setCurrent(listItemsDesktop)
                return {...listItemsDesktop, active: true}
            }else{
                return {...listItemsDesktop, active: false}
            }

        })
        
        setInfo(newState)
    }

  return (
    <div className='my-process-container'>
        { //Check if on Desktop 
        windowSize.innerWidth > 481 ?
        <>
        <div className='process-buttons-container'>
            {listItemsDesktop}
        </div>
        <div className='process-display-container'>
            <h4>{current.title}</h4>
            {RESEARCH_DESC}
        </div>
        </>
        //Check if on Mobile 
        :    
        <div className='process-buttons-container'>
            {listItemsDesktop}  
        </div>
        }
    </div>
  )
}

export default MyProcess