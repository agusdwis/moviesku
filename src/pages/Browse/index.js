/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, lazy } from "react";
import { connect } from "react-redux";

import ScrollTop from "helpers/scrollTop";
import useScrollTop from "hooks/scrollHook";

import { getSearchData } from "stores/actions/movieActions";

const NavigationBar = lazy(() => import("components/Navigation"));
const Movies = lazy(() => import("components/MovieList"));

const Browse = (props) => {
  const scrollPos = useScrollTop();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = async (e) => {
    setLoading(true);
    await props.getSearchData({
      search: search,
      page: 1,
    });
    setLoading(false);
  };

  useEffect(() => {
    const getFirstData = async () => {
      setLoading(true);
      await props.getSearchData({
        search: search || "Batman",
        page: page,
      });
      setLoading(false);
    };

    getFirstData();
    setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    const list = document.getElementById("result");
    if (props.scrollable) {
      list.addEventListener("scroll", (e) => {
        const el = e.target;
        if (el.scrollTop + el.clientHeight === el.scrollHeight) {
          setLoadMore(true);
        }
      });
    } else {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY + window.innerHeight ===
          list.clientHeight + list.offsetTop
        ) {
          setPage(props.search?.page + 1);
          setLoadMore(true);
        }
      });
    }
  }, []);

  useEffect(() => {
    const list = document.getElementById("result");

    if (list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoadMore(true);
    }
  }, [props.state]);

  const handleSearchEnter = async (e) => {
    if (search !== "" && e.key === "Enter") {
      await fetchData();
    }
  };

  const resetFields = () => {
    setSearch("");
    const field = document.getElementById("inputSearch");
    field.value = field.defaultValue;
  };

  return (
    <div id="result" className="relative bg-fixed bg-cover bg-hero-pattern">
      <NavigationBar />

      <div className="mt-header bg-gradient-to-t from-background via-background to-transparent">
        <section className="w-full flex flex-col items-center">
          <div className="container h-80 pt-10">
            <div className="container bg-primaryAccent opacity-95 rounded-md h-full flex flex-col justify-center items-center">
              <h2 className="title text-2xl text-center mb-3">
                Search Movies
                <br /> Catalogues
              </h2>
              <p className="py-5 text-sm font-light mb-4">
                Find your favourite Movies, Series
              </p>

              <div className="p-2 sm:p-3 w-full sm:w-2/3 flex items-center flex-row bg-primaryAlt rounded-md opacity-100">
                <input
                  type="text"
                  id="inputSearch"
                  onKeyDown={(e) => handleSearchEnter(e)}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="h-14 flex-grow mr-1 sm:mr-3 rounded-sm px-1 sm:px-5 bg-primaryAlt focus:outline-none"
                />

                {search !== "" && (
                  <div
                    onClick={() => resetFields()}
                    className="hidden mr-1 sm:mr-5 bg-white p-1 w-7 h-7 rounded-full md:flex justify-center items-center cursor:pointer opacity-50"
                  >
                    <i className="ri-close-line text-bold text-lg text-red-600 opacity-100"></i>
                  </div>
                )}

                <div className="text-center">
                  <button
                    onClick={() => fetchData()}
                    disabled={search === ""}
                    type="button"
                    className={`button px-6 sm:px-10 py-4 rounded-sm ${
                      search === "" ? "opacity-40" : ""
                    }`}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container w-full pt-10">
            <Movies loading={loading} data={props.search?.data} />
          </div>
        </section>
      </div>

      {scrollPos >= 700 && <ScrollTop />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.movies.search,
  };
};

const mapDispatchToProps = {
  getSearchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
