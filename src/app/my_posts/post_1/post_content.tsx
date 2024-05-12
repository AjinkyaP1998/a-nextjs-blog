import React from 'react';
import HerzlImage from './assets/theodore_herzl.png';
import MapImage from './assets/map.png';


function PostContent() {
    return (
        <div className="post-content">
            <h1 className="relative text-3xl font-bold mb-4">The Israel-Palestine Conflict: A Historical Perspective</h1>
            <div className = "actual-content">
                
                <p className="mb-4">
                    In 1891, an Austrian journalist named Theodore Herzl arrived in Paris for his new assignment.
                    He was a Jew, and Paris was the land of the Revolution where he expected equality and free thought.
                    Yet anti-Semitism was pervasive in France, and a famous military scandal, the Dreyfus affair,
                    where a French Captain (a Jew) was falsely accused of selling military secrets to Germany, reaffirmed this.
                </p>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="md:flex-1 md:order-2">
                        <img src={HerzlImage.src} alt="Theodore Herzl" className="max-w-xs mx-auto md:max-w-sm" />
                        <h2 className="text-2xl font-semibold mt-2 md:mt-4 text-center">Theodore Herzl</h2>
                    </div>
                    <div className="md:flex-1 md:order-1 md:mr-6">
                        <p className="mb-4">
                            This experience made Herzl realize his life&apos;s mission: to find a country for Jews, a place they could call home,
                            a place where they could live without discrimination. Herzl decided on Palestine,
                            the ancient homeland of Jews, and founded a new movement for Jewish statehood, often called Zionism.
                            Herzl is known as the founder of political Zionism, but he died before Israel was created.
                        </p>
                        <p className="mb-4">
                            The Jews are originally known as Israelites, and they originated around 1,000 BC in West Asia,
                            roughly the same place as modern-day Israel. Jews trace their ancestry to three people: Abraham,
                            his son Isaac, and his grandson Jacob. They believe that God promised Abraham a homeland in present-day Israel.
                            However, due to multiple invasions by the Assyrian Empire, the Babylonians, the Persian Empire, the Roman Empire,
                            and finally the Ottomans, Jews left their homeland.
                        </p>
                    </div>
                </div>
                <p className="mb-4">
                    By the 19th and 20th centuries, Jews were spread across countries and continents, with large diasporas in
                    Poland, Russia, Britain, and Germany. As anti-Semitism increased, Zionism emerged, led by the likes of Theodore Herzl.
                    He organized a World Congress of Zionists in Basel, Switzerland, where the plan for creating a Jewish homeland in Palestine was made.
                </p>
                <p className="mb-4">
                    However, Palestine was home to tens of thousands of Arab people.
                    Herzl and his company made an offer to the Ottoman Sultan to pay off their foreign debt in return for letting them colonize Palestine,
                    but the Sultan rejected it. Instead, Jews started buying land from Ottoman landlords in Palestine,
                    often funded by wealthy Jews from America and Europe.
                </p>
                <p className="mb-4">
                    The British, who were the superpower at the time, were initially lukewarm to the Zionist cause.
                    However, during the World War, they needed the support of Jews and offered complete support for a homeland in Palestine.
                    After the war, Britain was given control of Palestine, and Jewish migration increased.
                </p>
                <p className="mb-4">
                    As the Jewish population in Palestine increased, tensions with the Arab population escalated.
                    The British did what they do best: they suggested partitioning a Jewish State for the Jews and an Arab State for the Palestinians.
                    However, the Arab side rejected this. After the second world war, Britain left the issue to the United Nations, which proposed a plan where the Jewish state would get 55% of Palestine and the Arab state would get 44%, with the remaining 1% given to Jerusalem to be controlled by an international regime.
                </p>
                <p className="mb-4">
                    Palestinians rejected the plan, but Jews declared the state of Israel in 1948. Arab countries attacked
                    Israel immediately, but Israel won the war and occupied 77% of Palestine. In 1967, another war broke out,
                    and Israel captured the West Bank, Gaza, and the Sinai Peninsula.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center md:items-center md:justify-start" style={{ height: '100%' }}>
                    <div className="md:flex-1 md:order-1"  style={{ flex: '0 0 60%' }} >
                        <img src={MapImage.src} alt="MapImage" className="mx-auto" style={{ width: '90%' }}/>
                    </div>
                    <div className="md:flex-1 md:order-2 md:mr-6"   style={{ flex: '0 0 40%' }} >
                        <p className="mb-4">
                            Today, Palestine wants statehood based on the pre-1967 borders, meaning the whole of West Bank, Gaza, and East Jerusalem.
                            Israel, however, maintains that this is not possible as they have built dozens of settlements inside the West Bank.
                            The resolution looks far away. This conflict has been named a regional conflict as both sides claim the same land,
                            but it is also an exported one. Historically, Europe discriminated against Jews, not Palestinians or Ottomans;
                            they were compelled to relocate. Later, during the war, they required Jewish support and thus promised them a homeland.
                            Yet, post-war difficulties prompted them to execute a classic colonial act, a tactic they often employ.
                            The question of Palestine cannot be resolved through weaponry but demands political solutions. Hope rests in moderates from
                            both factions charting a peaceful path towards coexistence.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default PostContent;
