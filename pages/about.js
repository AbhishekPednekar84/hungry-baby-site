import React from "react";
import Image from "next/image";

// Component imports
import Layout from "@/components/layout/Layout";
import Tilt from "@/components/style/Tilt";
import AboutPageHeadLayout from "@/components/layout/head/AboutPageHeadLayout";

const About = () => {
  const monthDiff = (dateFrom, dateTo) => {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  };

  const d = new Date();

  return (
    <AboutPageHeadLayout>
      <Layout>
        <div
          itemScope
          itemType="https://schema.org/AboutPage"
          className="py-36"
        >
          <div className="heading-container">
            <div className="max-w-max">
              <h1 className="pb-2 text-center text-5xl">Team HuBB</h1>
              <div className="heading-underline"></div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="">
              <div className="flex flex-col gap-5 px-5 py-10 md:px-10 lg:flex-row lg:justify-between lg:px-52">
                <div className="relative mb-5 h-[400px] w-full lg:mb-0 lg:min-w-[250px]">
                  <Image
                    src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/Team_HuBB_n0SpVzP95.jpeg"
                    alt="Team Hungry Baby Blog"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    priority={true}
                    placeholder="blur"
                    blurDataURL="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/Team_HuBB_n0SpVzP95.jpeg/tr:bl-10"
                    className="image-hover-scale"
                  />
                </div>
                <div className="md:px-5">
                  <p className="text-lg first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold">
                    Hey there, we are Aparna and Abhishek a.k.a{" "}
                    <span className="font-bold text-brandColor">Team HuBB</span>
                    . We are IT professionals from Bangalore, proud parents of
                    our{" "}
                    {monthDiff(
                      new Date(2020, 6),
                      new Date(d.getFullYear(), d.getMonth())
                    )}
                    -month-old darling daughter and creators of The Hungry Baby
                    Blog (HuBB). We want to lead off by saying that we’re no
                    experts or hold no formal degrees in child nutrition.
                    Whatever we know is through hours of reading articles or
                    watching videos created by individuals who are stalwarts in
                    this field. We vet and taste every recipe and post it only
                    after getting a sign off from an opinionated little expert
                    taste tester.
                  </p>
                  <p className="mt-5 text-lg">
                    It is always beneficial to introduce kids to a wide range of
                    foods and flavours early on. That makes them less hesitant
                    when trying out new food and less picky eaters. But coming
                    up with new recipes for children is not easy. One can only
                    recycle the preferred subset of food items so many times
                    before children lose interest in them. This detail was the
                    inspiration behind the blog. We wanted to share some of the
                    things we learned and tried and, along the way, inspire
                    other parents to get creative in their cooking endeavours.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500 px-5 py-16 text-white md:px-10 lg:px-52">
                <Tilt>
                  <h2 className="mb-5 font-bold">The early days</h2>
                  <p className="text-lg">
                    We always had our daughter at the table during mealtime
                    before she started solids. The idea was for her to get used
                    to the fact that mealtime is family time. We would
                    constantly talk to her and tell her what we were eating and
                    why we ate certain things differently. We continued this
                    when she started solids. We opted for the baby-led weaning
                    approach to help all of us be engaged in the same activity
                    at the meal table; eating out of our respective plates
                    (well, most of the time).
                  </p>
                  <p className="mt-5 text-lg">
                    Between the ages of 6 and 12 months, her meals included
                    finger foods or deconstructed versions of our meals which
                    she could squish, easily chew with her gums and have a lot
                    of fun by making a mess (this is a good thing!). For
                    instance, if we had a vegetable in a curry, we would take
                    some pieces of the cooked veggie out before adding spices
                    and cut it to the appropriate size. At 12 months, we
                    gradually decided to stop making things for her separately.
                    She had the same food as the rest of the family with some
                    modifications to help her get used to new food items and not
                    feel scared or frustrated. So most of the recipes we post
                    can be enjoyed by the entire family (with some minor
                    tweaks). Our daughter notices any difference between our
                    plates and hers. So if we are cooking a special meal which
                    is not suitable for her, we enjoy it once she is in bed :)
                  </p>
                </Tilt>
              </div>

              <div className="mt-10 px-10 py-10 lg:px-52">
                <h2 className="mb-5 font-bold">Keeping things natural</h2>
                <p className="text-lg">
                  Some of the recipes on this blog will resonate better with
                  someone familiar with Indian cuisine. But there will be a good
                  amount of content for you to try, irrespective of where you
                  are present geographically. The ingredients we use are in line
                  with our child’s age. So presently, this means fewer bottled
                  or canned items and more natural ingredients. That not only
                  keeps the meal healthy but helps us keep our budget in check.
                  We also use whole fat milk and yoghurt as they go better with
                  toddler food when compared to fat-free versions.
                </p>
              </div>

              <div className="relative mt-10 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 px-5 py-16 text-white md:px-10 lg:px-52">
                <Tilt>
                  <h2 className="mb-5 font-bold">Not stressing over sugar</h2>
                  <p className="text-lg">
                    We minimize or avoid added sugar to the extent possible but
                    do not stress over it. The cakes or cookies we bake with
                    fruits or dates as sweetening agents taste great. However,
                    the occasional modest drizzle of sugar, jaggery, honey or
                    maple syrup is ok. Desserts are also a type of food that
                    children must enjoy without guilt.
                  </p>
                </Tilt>
              </div>

              <div className="mt-10 px-5 py-10 md:px-10 lg:px-52">
                <h2 className="mb-5 font-bold">
                  A drama-free mealtime (well mostly...)
                </h2>
                <p className="text-lg">
                  Mealtime at our home is drama-free for the most part. We are
                  fortunate that our daughter is not allergic to any particular
                  food group, which gives a wide range of options to choose from
                  when planning her meal. We try to keep mealtime stress free
                  and without distraction. We fully trust her to be in tune with
                  her hunger. We do not force bites or make her feel bad if she
                  completely rejects something we spent an hour preparing. There
                  are no conversations about some food being better than others
                  and give her the freedom to experiment with whatever is on her
                  plate. Mealtimes can be messy but remember that they are still
                  figuring out things. The mess will only get better. We can
                  wholeheartedly vouch for that.
                </p>
                <p className="mt-5 text-lg">
                  We are still early in this journey but can confidently say
                  that we already see a lot of benefits. Our daughter is not
                  scared to try something new (when paired with familiar food),
                  lets us know when she is done and can tell us if she is hungry
                  before her usual mealtime. We have even managed to take our
                  daughter to restaurants (the few times the pandemic has
                  allowed) and been able to get through a meal without having to
                  resort to our phone or iPad for a distraction or have one
                  parent spend time with her while the other is powering through
                  the meal. We do our due diligence and ensure we can order food
                  at a particular restaurant that all of us can have.
                </p>
              </div>

              <div className="relative mt-10 -mb-16 bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500 px-5 py-16 text-white md:px-10 lg:px-52">
                <Tilt>
                  <p className="text-xl">
                    If you are still here, we would like to thank you for
                    reading to the end and hope you find the recipes worth
                    trying. We wish you and your children the best. Happy
                    cooking!
                  </p>
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </AboutPageHeadLayout>
  );
};

export default About;
